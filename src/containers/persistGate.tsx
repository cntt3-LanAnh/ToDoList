import { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Persistor } from 'redux-persist';
import { appAction } from 'stores/reducers/app';

type Props = {
  onBeforeLift?: () => void;
  children: ReactNode | ((state: boolean) => ReactNode);
  loading?: ReactNode;
  persistor: Persistor;
};

export const PersistGate = ({ children, onBeforeLift, persistor }: Props) => {
  const [bootstrapped, setBootstrapped] = useState(false);
  const dispatch = useDispatch();
  let _unsubscribe: () => void;

  useEffect(() => {
    _unsubscribe = persistor.subscribe(handlePersistorState);
    handlePersistorState();

    return () => {
      _unsubscribe && _unsubscribe();
    };
  }, []);

  const handlePersistorState = () => {
    const { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      dispatch(appAction.setAuthenticationLoaded(true));
      if (onBeforeLift) {
        Promise.resolve(onBeforeLift()).finally(() => setBootstrapped(true));
      } else {
        setBootstrapped(true);
      }

      _unsubscribe && _unsubscribe();
    }
  };

  if (typeof children === 'function') {
    return children(bootstrapped);
  }

  return children;
};
