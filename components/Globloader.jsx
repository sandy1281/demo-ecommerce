"use client";

import { RotatingLines } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className="fixed inset-0 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100vh" }}>
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-white border-t-transparent">
                <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    );
}
