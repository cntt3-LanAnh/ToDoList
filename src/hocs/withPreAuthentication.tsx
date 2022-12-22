import Router from 'next/router';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function withPreAuthentication<T extends Props = Props>(Component: React.ComponentType<T>) {
  const HOC: React.FC<T> = (props: T) => {
    const { token } = {
      token: '',
    };

    if (token) {
      Router.replace('/');

      return null;
    }

    return <Component {...props} />;
  };

  return HOC;
}
