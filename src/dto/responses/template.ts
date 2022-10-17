/* eslint-disable @typescript-eslint/no-explicit-any */
import { Expose, Type } from 'class-transformer';

export class ResTemplate<TData> {
  messageCode?: number;
  data?: TData;
  success: boolean;
  statusCode?: number;

  @Expose({ name: 'errCode' })
  errorCode?: number;
}

export class PaginationRes<TData> {
  page: number;
  perPage: number;
  total: number;
  items?: TData[];
}

export const convertDtoToTemplateDto = <TData>(dto: any) => {
  class ResponseTemplateData extends ResTemplate<TData> {
    @Type(() => dto)
    data?: TData;
  }

  return ResponseTemplateData;
};

export const convertDtoToPaginationDto = <TData>(dto: any) => {
  class ResponseTemplateData extends PaginationRes<TData> {
    @Type(() => dto)
    items?: TData[];
  }

  return ResponseTemplateData;
};
