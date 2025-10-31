"use client";

import { AuthProvider } from '../app/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { useSelector } from "react-redux";
import Loader from '@/components/Globloader';
import PageWrapper from './pagewrapper';

function LayoutContent({ children }) {
  const loading = useSelector((state) => state.loader.isLoading);
  return (
    <>
      {loading && <Loader />}
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

export default function RootLayout({ children }) {
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