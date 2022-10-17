import { configureStore, Store } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useDispatchRoot, useSelector as useSelectorRoot } from 'react-redux';
import { Persistor, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { Task } from 'redux-saga';

import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authentication'],
};

export interface SagaStore extends Store {
  sagaTask: Task;
  reduxPersistData: Persistor;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const storeGlobal = makeStore();
export const persistor = persistStore(storeGlobal);
export type AppDispatch = typeof storeGlobal.dispatch;
export type RootState = ReturnType<typeof storeGlobal.getState>;

export const useDispatch = () => useDispatchRoot<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRoot;
