"use client";
import axios from "axios";
import { store } from "@/redux/store";
import { showLoader, hideLoader } from "@/redux/loaderSlice";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
 
  (config) => {
    const accessToken = document?.cookie
      ?.split("; ")
      ?.find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    store.dispatch(showLoader());
    return config;
  },
  (error) => {
    store.dispatch(hideLoader());
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor + Delay added 👇
axiosInstance.interceptors.response.use(
  (response) => {

    store.dispatch(hideLoader());
    return response;
  },
  (error) => {
    console.log(error)
     if (error.code === 'ERR_NETWORK') {
          console.error('Network Error:', error.message);
        } else {
          // Handle other types of errors
          console.error('Other Error:', error);
        }
    store.dispatch(hideLoader());
    return Promise.reject(error);
  }
);

export default axiosInstance;
