"use client";

import React from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {

    const router = useRouter();
    

    const logged = () => {
        router.push("/login")
    }

    return (
        <div>
            <div>
                {/* Hero Section */}
                <div className="hero">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="intro-excerpt">
                                    <h1>SignUp Here</h1>
                                </div>
                            </div>
                            <div className="col-lg-7"></div>
                        </div>
                    </div>
                </div>


                {/* Login Form Section */}
                <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                    <form className="w-50 bg-white p-5 rounded-4 shadow">
                        <div className="mb-4 mt-3">
                            <input
                                type="text"
                                className="form-control w-75 mx-auto"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                className="form-control w-75 mx-auto"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                className="form-control w-75 mx-auto"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                className="form-control w-75 mx-auto"
                                placeholder="Enter your password again"
                            />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary px-4 mt-3">Create account</button>
                        </div>

                        <p className="text-center mt-4" onClick={logged}>
                            Already have account, go to <a href="#">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
            

        </div>
    )
}

export default SignUp
