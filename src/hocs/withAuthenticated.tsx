import { AppLoading } from 'components/appLoading';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'stores';
import { appAction } from 'stores/reducers/app';

interface Props {
  children?: React.ReactNode;
}

export function withAuthenticated<T extends Props = Props>(Component: React.ComponentType<T>) {
  const AuthHOC: React.FC<T> = (props) => {
    const dispatch = useDispatch();

    const { token, authLoaded } = useSelector((state) => {
      return {
        token: state.authentication.token,
        authLoaded: state.app.authLoaded,
      };
    });

    useEffect(() => {
      if (!token) {
        setTimeout(() => {
          dispatch(appAction.setAuthenticationLoaded(true));
          Router.replace('/login');
        }, 500);
      }
    }, [dispatch, token]);

    if (!authLoaded || !token) {
      return <AppLoading />;
    }

    return <Component {...props} />;
  };

  return AuthHOC;
}
