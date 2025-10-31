import React, { useState, useEffect } from "react";
import { getCookie } from "../../utils/helpers";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    // Check login status on mount
    useEffect(() => {
        const accessToken = getCookie("accessToken");
        const user = localStorage.getItem("user");
        setLoggedIn(!!accessToken && !!user);
    }, []);

    // ✅ Logout function — fully removes cookies + localStorage
    const handleLogout = () => {
        // Remove localStorage data
        localStorage.removeItem("user");

        // Delete cookies by setting them to expire in the past
        document.cookie =
            "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
            "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Update UI and redirect to login
        setLoggedIn(false);
        router.push("/login");
    };

    // Redirect to login if not logged in
    const handleLogin = () => {
        router.push("/login");
    };

    return (
        <button
            className="btn btn-primary"
            onClick={loggedIn ? handleLogout : handleLogin}
        >
            {loggedIn ? "Logout" : "Login"}
        </button>
    );
};

export default AuthButton;
