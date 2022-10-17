import Router from 'next/router';
import React from 'react';
import { useSelector } from 'stores';

interface Props {
  children?: React.ReactNode;
}

export function withPreAuthentication<T extends Props = Props>(Component: React.ComponentType<T>) {
  const HOC: React.FC<T> = (props: T) => {
    const { token } = useSelector((state) => ({
      token: state.authentication.token,
    }));

    if (token) {
      Router.replace('/');

      return null;
    }

    return <Component {...props} />;
  };

  return HOC;
}
