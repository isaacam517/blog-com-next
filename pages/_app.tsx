import { AppProps } from 'next/app'
//import Layout from '../containers/layout'
import '../styles/globals.scss'
import 'highlight.js/styles/hybrid.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  ) 
}

export default MyApp