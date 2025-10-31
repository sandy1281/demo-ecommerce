// src/api/auth.js
import axiosInstance from "../utils/axiosInstance";
import { setAuthCookies, setRefreshCookies } from "../utils/helpers";
axiosInstance

export const loginUser = async (dataFilled) => {
    try {
        const response = await axiosInstance.post("/auth/login", dataFilled);

        // Store tokens in cookies
        setAuthCookies(response.data.accessToken, 1800); // 30 mins in seconds
        setRefreshCookies(response.data.refreshToken);

        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(response.data));

        return response.data; // return data to the component
    } catch (error) {
        console.error("Login Failed:", error);
        throw error;
    }
};


// fetch products
export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get("/products");
    return response.data; // ✅ return the data so caller can use it
  } catch (error) {
    console.error("Something went wrong:", error);
    throw error; // ✅ rethrow for caller to handle
  }
};


export const fetchSingleProduct = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching single product:", error);
  }
};







export const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axiosInstance.post("/auth/refresh", dataFilled)

        const data = response.data;

        // ✅ Save new tokens in cookies
        setAuthCookies(data.accessToken, 1800); // 30 mins
        setRefreshCookies(data.refreshToken);   // default 7 days

        return data; // return tokens for any other use
    } catch (error) {
        console.error("Token refresh failed:", error);
        return null;
    }
};
