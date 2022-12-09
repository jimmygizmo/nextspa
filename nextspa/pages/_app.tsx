import '../styles/globals.css'  // From CNA
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic'

// No success with 'next/dynamic' yet. I think it can be anything inside the anon func.
// import dynamic from 'next/dynamic'
// const NavBar = dynamic(() => import("/path/of/NavBar"), { ssr: false })



function App({ Component, pageProps }: AppProps) {
    return (
      <div>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
  );
}

// @ts-ignore
// export default dynamic(App, {ssr: false});
export default App;


// I even tried export default dynamic(App etc..) .. no good.
// That attempt failed with an error could not destructure Component out of { Component, pageProps } because
// param was undefined or something like. I did not figure that error all the way out but basically I think
// the params did not exist in the context in which the dynamic() executed ?!?
// So far, it does seem that next/dynamic might still be the new and required way to stop a hydration warning
// or error. There are more ways to attempt to use it here, I am sure.
// It makes it OK for a specific component to only render in the browser.
// How do we apply this to the ENTIRE APP? That's the best way I can define where we are at.

// FYI, This was the default, from CNA:
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

