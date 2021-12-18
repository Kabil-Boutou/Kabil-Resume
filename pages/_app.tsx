/* import App from 'next/app'

import { StateProvider } from 'context/GlobalContext'
import GlobalReducer from 'context/GlobalReducer'
import { InitialGlobalReducer } from 'utils/consts'
import Layout from 'components/Layout'
import 'react-awesome-slider/dist/styles.css'
import 'styles/style.scss'
import 'styles/slider.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateProvider reducer={GlobalReducer} initialState={InitialGlobalReducer}>
        <Component {...pageProps} />
        <Layout>
        </Layout>
      </StateProvider>
    )
  }
}

export default MyApp
 */
import React from 'react'
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import 'styles/style.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
