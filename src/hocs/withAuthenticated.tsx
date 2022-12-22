import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function withAuthenticated<T extends Props = Props>(Component: React.ComponentType<T>) {
  const AuthHOC: React.FC<T> = (props) => {
    const { token, authLoaded } = {
      token: '',
      authLoaded: '',
    };

    if (!authLoaded || !token) {
      return null;
    }

    return <Component {...props} />;
  };

  return AuthHOC;
}
