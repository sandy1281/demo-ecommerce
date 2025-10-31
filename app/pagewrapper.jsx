'use client'
import { useState, useEffect } from "react"

import Footer from '@/components/common/footer';
import Navbar from '@/components/common/navbar';
import { getCookie } from "@/utils/helpers.js";
import { useAuth } from '../app/AuthContext';
import Login from "./login/page";


export default function PageWrapper({ children }) {
  const { isAuthorized, setIsAuthorized, user, setUser } = useAuth();

  useEffect(() => {
    const verifyTokens = async () => {
      const accessToken = getCookie('accessToken');
      const refreshToken = getCookie('refreshToken');
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (accessToken && storedUser) {
        setIsAuthorized(true);
        setUser(storedUser);
        return;
      }

      if (!accessToken && refreshToken) {
        const data = await refreshAccessToken(refreshToken);
        if (data && data.accessToken) {
          setIsAuthorized(true);
          setUser(JSON.parse(localStorage.getItem('user')));
        } else {
          setIsAuthorized(false);
          setUser(null);
        }
        return;
      }

      setIsAuthorized(false);
      setUser(null);
    };

    verifyTokens();
  }, []);
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "80px" }}>
        {children}
      </main>
      <Footer />
    </>
  )
}