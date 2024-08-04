import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/global.scss';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
