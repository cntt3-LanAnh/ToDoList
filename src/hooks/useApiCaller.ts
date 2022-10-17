/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useMutation as useMutationRoot,
  UseMutationOptions,
  UseMutationResult,
  useQuery as useQueryRoot,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { useAxios } from 'containers/axiosProvider';
import { convertDtoToTemplateDto, ResTemplate } from 'dto/responses/template';
import { useMemo } from 'react';
import { APIConfig } from 'types/api';

type FetcherProps<TVariables> = {
  apiConfig: APIConfig;
  data?: TVariables;
  axios: AxiosInstance;
  dataResDto?: any;
};

const getT = (nameSpace: string, local: string) => (key: string, option?: any) => key;

export async function fetcher<TVariables = unknown, TData = unknown>(
  { apiConfig, data, axios, dataResDto }: FetcherProps<TVariables>,
  option?: Option<TData>
): Promise<ResTemplate<TData>> {
  let request: Promise<AxiosResponse<TData>> = null as any;

  let statusCode = 0;
  if (apiConfig?.factoryData) {
    statusCode = 200;
    request = new Promise((resolve) => {
      setTimeout(() => resolve(apiConfig?.factoryData), 2000);
    });
  }

  const dataTransform = instanceToPlain(data, { exposeDefaultValues: true }) as any;

  if (!request) {
    switch (apiConfig.method) {
      case 'POST':
        request = axios.post<TData, AxiosResponse<TData>>(apiConfig.endPoint, dataTransform);
        break;

      case 'GET':
        request = axios.get(apiConfig.endPoint, { params: dataTransform });
        break;

      case 'DELETE':
        request = axios.delete(apiConfig.endPoint, { params: dataTransform });
        break;

      case 'PUT':
        request = axios.put(apiConfig.endPoint, dataTransform);
        break;
    }
  }

  let dataResponse: ResTemplate<TData> = { success: false };
  try {
    const result = await request;
    dataResponse =
      plainToInstance(convertDtoToTemplateDto<TData>(dataResDto), result.data, {
        exposeDefaultValues: true,
      }) || ({} as ResTemplate<TData>);

    dataResponse.success = true;

    if (!statusCode) {
      statusCode = result.status;
    }

    dataResponse.statusCode = statusCode;

    return dataResponse;
  } catch (error) {
    const axiosError = error as AxiosError;

    dataResponse =
      plainToInstance(convertDtoToTemplateDto<TData>(dataResDto), axiosError.response?.data, {
        exposeDefaultValues: true,
      }) || ({} as ResTemplate<TData>);

    if (typeof dataResponse !== 'object') {
      dataResponse = {} as ResTemplate<TData>;
    }

    dataResponse.success = false;
    dataResponse.statusCode = axiosError.response?.status;

    return dataResponse;
  } finally {
    handleProcessErrorCommon<TData>(dataResponse);
    handleProcessResponse<TData>(dataResponse, option);
  }
}

type QueryOption = Omit<UseQueryOptions, 'queryKey' | 'queryFn' | 'initialData'> & {
  initialData?: () => undefined;
};

type ErrorObject<TResponseData> = {
  message?: string | true;
  handler?: (result?: ResTemplate<TResponseData>) => any;
};

type SuccessObject<TResponseData> = {
  message?: string;
  handler?: (result?: ResTemplate<TResponseData>) => any;
};

type Option<TResponseData> = QueryOption & UseMutationOptions & { errorObj?: ErrorObject<TResponseData>; successObj?: SuccessObject<TResponseData> };

type Props<TVariables, TResponseData> = {
  apiConfig: APIConfig;
  data?: TVariables;
  option?: Option<TResponseData>;
  dataResDto?: any;
};

const showMessageError = (messageString: string) => {
  if (!messageString) {
    return;
  }

  const hide = message.error(messageString);

  setTimeout(hide, 5000);
};

const showMessageSuccess = (messageString: string) => {
  if (!messageString) {
    return;
  }

  const hide = message.success(messageString);

  setTimeout(hide, 2500);
};

async function handleProcessErrorCommon<TResponseData>(result?: ResTemplate<TResponseData>) {
  if (typeof result?.success === 'undefined') {
    return;
  }

  const t = await getT('jp', 'common');

  if (!result?.statusCode) {
    showMessageError(t('error_msg.no_api_network'));
  }

  if (result?.statusCode === 404) {
    showMessageError(t('error_msg.api_not_found'));
  }
}

async function handleProcessResponse<TResponseData>(result?: ResTemplate<TResponseData>, option?: Option<TResponseData>) {
  if (typeof result?.success === 'undefined') {
    return;
  }

  const t = await getT('jp', 'common');

  if (!result?.success) {
    let message = '';

    if (option?.errorObj) {
      if (option.errorObj.message === true && result?.errorCode) {
        const messagePath = `api_error_msg.${result.errorCode}`;
        message = t(messagePath, { count: 1 });
      }

      if (typeof option.errorObj.message === 'string') {
        message = option.errorObj.message;
      }

      if (message) {
        showMessageError(message);
      }

      if (option.errorObj.handler) {
        option.errorObj.handler(result);
      }
    }
  }

  if (result?.success) {
    if (option?.successObj?.message) {
      showMessageSuccess(option.successObj.message);
    }

    if (option?.successObj?.handler) {
      option.successObj.handler(result);
    }
  }
}

export function useQuery<TVariables, TResponseData>({
  apiConfig,
  data,
  dataResDto,
  option,
}: Props<TVariables, TResponseData>): UseQueryResult<ResTemplate<TResponseData>> {
  const axios = useAxios();

  const queryKeys = useMemo(() => {
    let keys: any[] = [];

    if (apiConfig.keys.length) {
      keys = [...keys, ...apiConfig.keys];
    }

    if (data) {
      keys = [...keys, data];
    }

    return keys;
  }, [apiConfig, data]);

  const queryResult = useQueryRoot<ResTemplate<TResponseData>>(
    queryKeys,
    () => fetcher<TVariables, TResponseData>({ apiConfig, data, axios, dataResDto }, option),
    {
      refetchOnWindowFocus: false,
      ...(option || ({} as any)),
    }
  );

  return queryResult;
}

export function useMutation<TVariables = unknown, TResponseData = unknown>({
  apiConfig,
  option,
  dataResDto,
}: Props<TVariables, TResponseData>): UseMutationResult<ResTemplate<TResponseData>, unknown, TVariables> {
  const axios = useAxios();

  const mutation = useMutationRoot<ResTemplate<TResponseData>, unknown, TVariables>(
    (data: TVariables) => fetcher<TVariables, TResponseData>({ apiConfig, data, axios, dataResDto }, option),
    option as any
  );

  async function mutateAsync(data: TVariables) {
    const result = await mutation.mutateAsync(data);

    return result;
  }

  return { ...mutation, mutateAsync };
}
