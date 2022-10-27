import "../styles/404-not-found.css"
import "../styles/checkout.css"
import "../styles/complete-checkout.css"
import "../styles/detail.css"
import "../styles/edit-profile.css"
import "../styles/homepage.css"
import "../styles/navbar-log-in.css"
import "../styles/overview.css"
import "../styles/sidebar.css"
import "../styles/sign-in.css"
import "../styles/sign-up-photo-success.css"
import "../styles/sign-up-photo.css"
import "../styles/sign-up-success.css"
import "../styles/sign-up.css"
import "../styles/transactions-detail.css"
import "../styles/transactions.css"
import "../styles/utilities.css"

import type { AppProps } from "next/app"
import Head from "next/head"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {" "}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
