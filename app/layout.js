"use client";

import { AuthProvider } from '../app/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { useSelector } from "react-redux";
import Loader from '@/components/Globloader';
import PageWrapper from './pagewrapper';
import { useEffect } from 'react';

function LayoutContent({ children }) {
  const loading = useSelector((state) => state.loader.isLoading);
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {loading && <Loader />}
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

  export default function RootLayout({ children }) {
    useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
      <html>
        <body>
          <AuthProvider>
            <Provider store={store}>
              <LayoutContent>{children}</LayoutContent>
            </Provider>
          </AuthProvider>
        </body>
      </html>
    )
  }