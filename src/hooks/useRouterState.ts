/* eslint-disable @typescript-eslint/no-explicit-any */
import Router from 'next/router';
import { useEffect, useState } from 'react';

export function useRouterState<T>({ initialValue, pathname }: { initialValue: T; pathname?: string }) {
  const path = pathname ? pathname : Router.pathname;

  const [storedValue, setRootStoredValue] = useState<{ value: T; isReady: boolean }>({ value: initialValue, isReady: false });

  const setStoredValue = (newValue: T) => {
    setRootStoredValue((prevValue) => ({ ...prevValue, value: newValue }));
  };

  useEffect(() => {
    const params = Object.fromEntries(new URLSearchParams(window.location.search)) as any;

    if (Object.entries(params).length) {
      setRootStoredValue({ value: params, isReady: true });
    } else {
      setRootStoredValue({ value: initialValue, isReady: true });
    }
  }, []);

  const setValue = (value: T) => {
    setStoredValue(value);
    Router.push({ pathname: path, query: { ...(value as any) } });
  };

  return [storedValue.value, setValue, storedValue.isReady] as const;
}
