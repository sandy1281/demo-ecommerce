'use client';
import React, { useState, Suspense } from 'react';
import { setAuthCookies, setRefreshCookies } from '@/utils/helpers.js';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/utils/services';
import axiosInstance from '@/utils/axiosInstance';
import { useAuth } from '../../app/AuthContext';
import { useSearchParams } from "next/navigation";

const LoginContent = () => {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect");

    const { isAuthorized, setIsAuthorized, user, setUser } = useAuth();
    const router = useRouter();

    // State for form data
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Handle input change
    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const dataFilled = {
                username: formData.username,
                password: formData.password,
                expiresInMins: 30
            }
            const loginResponse = await loginUser(dataFilled);
            console.log(loginResponse);

            setIsAuthorized(true);
            setUser(dataFilled);

            const redirectUrl = redirectTo || "/home";
            router.push(redirectUrl);
            router.refresh();


        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };


    const signupPage = () => {
        router.push("/signup");
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <div className="col-lg-7"></div>
                    </div>
                </div>
            </div>

            {/* Login Form Section */}
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <form onSubmit={handleLogin} className="w-50 bg-white p-5 rounded-4 shadow">
                    <div className="mb-4 mt-3">
                        <input
                            type="text"
                            name="username"
                            className="form-control w-75 mx-auto"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            className="form-control w-75 mx-auto"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4 mt-3">
                            Login
                        </button>
                    </div>

                    <p className="text-center mt-4" onClick={signupPage} style={{ cursor: "pointer" }}>
                        Don’t have an account? <span className="text-primary">Create here</span>
                    </p>
                </form>
            </div>
        </div>
    );
};


export default function Login (){
    return (
    <Suspense fallback={<div>Loading product...</div>}>
      <LoginContent />
    </Suspense>
  );
};