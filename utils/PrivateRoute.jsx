// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { getCookie } from "../utils/helpers";
// import { refreshAccessToken } from "../utils/services";

// const PrivateRoute = ({ children }) => {
//     const [isAuthorized, setIsAuthorized] = useState(null);

//     useEffect(() => {
//         const verifyTokens = async () => {
//             const accessToken = getCookie("accessToken");
//             const refreshToken = getCookie("refreshToken");

//             // ✅ Case 1: Access token exists — allow access
//             if (accessToken) {
//                 setIsAuthorized(true);
//                 return;
//             }

//             // ✅ Case 2: Refresh token exists — refresh tokens
//             if (!accessToken && refreshToken) {
//                 const data = await refreshAccessToken(refreshToken);
//                 if (data) {
//                     setIsAuthorized(true);
//                 } else {
//                     setIsAuthorized(false);
//                 }
//                 return;
//             }

//             // ❌ Case 3: No tokens at all
//             setIsAuthorized(false);
//         };

//         verifyTokens();
//     }, []);

//     // ⏳ While checking tokens
//     if (isAuthorized === null) return <p>Checking authorization...</p>;

//     return isAuthorized ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
