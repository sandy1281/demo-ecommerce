"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import addressReducer from "./addressSlice"
import loaderReducer from "./loaderSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
    loader: loaderReducer,


  },
});

