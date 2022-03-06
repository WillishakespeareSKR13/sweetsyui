import { AppProps } from 'next/app';
import { StylesGlobal } from '@ixulabs/ui';
import { Alert } from '@components';
import { FC } from 'react';
import useStore from '@Redux/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const _App: FC<AppProps> = ({ Component, pageProps }) => {
  const { persistor, store } = useStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert>
          <StylesGlobal />
          <Component {...pageProps} />
        </Alert>
      </PersistGate>
    </Provider>
  );
};

export default _App;
