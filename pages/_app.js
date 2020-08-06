import React from 'react'
import App from 'next/app'

import { StateProvider } from 'context/GlobalContext'
import GlobalReducer from 'context/GlobalReducer'
import { InitialGlobalReducer } from 'utils/consts'
import Layout from 'components/Layout'
import 'react-awesome-slider/dist/styles.css'
import 'styles/slider.scss'
import 'styles/CV.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateProvider reducer={GlobalReducer} initialState={InitialGlobalReducer}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateProvider>
    )
  }
}

export default MyApp
