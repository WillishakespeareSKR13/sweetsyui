/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store, Action, AnyAction } from 'redux';
import { PersistorOptions, Persistor } from 'redux-persist/es/types';

declare module 'redux-persist/es/persistStore' {
  export default function persistStore<
    S = any,
    A extends Action<any> = AnyAction
  >(
    store: Store<S, A>,
    persistorOptions?: PersistorOptions | null,
    callback?: () => any
  ): Persistor;
}
