/* eslint-disable react/prop-types */
import React from 'react';
import App from 'next/app';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async appContext => {
  const pageProps = await App.getInitialProps(appContext);
  return { ...pageProps };
};

export default MyApp;
