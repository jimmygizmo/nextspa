import '../styles/globals.css'  // From CNA
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
    return (
      <div suppressHydrationWarning={true}>
        {typeof window === 'undefined' ? null : <Component {...pageProps} suppressHydrationWarning={true} />}
      </div>
  );
}

export default App;


// FYI, This was the default, from CNA:
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

