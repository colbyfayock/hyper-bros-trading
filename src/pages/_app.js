import { SnipcartProvider } from '@hooks/use-snipcart.js';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SnipcartProvider>
      <Component {...pageProps} />
    </SnipcartProvider>
  );
}

export default MyApp;