// ✅ Utility to check if running in browser
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";

// ✅ Save access token with expiry time (in seconds)
export function setAuthCookies(accessToken, expiresInSeconds) {
  if (!isBrowser) return; // prevent SSR crash
  const expiryDate = new Date(Date.now() + expiresInSeconds * 1000).toUTCString();
  document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/; Secure; SameSite=Strict`;
}

// ✅ Save refresh token with expiry time (default: 7 days)
export function setRefreshCookies(refreshToken, expiresInSeconds = 7 * 24 * 60 * 60) {
  if (!isBrowser) return; // prevent SSR crash
  const expiryDate = new Date(Date.now() + expiresInSeconds * 1000).toUTCString();
  document.cookie = `refreshToken=${refreshToken}; expires=${expiryDate}; path=/; Secure; SameSite=Strict`;
}

// ✅ Read a cookie by name
export function getCookie(name) {
  if (!isBrowser) return null; // prevent SSR crash
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// ✅ Check if user is logged in
export const isLoggedIn = () => {
  if (!isBrowser) return false; // prevent SSR crash
  const accessToken = getCookie("accessToken");
  const user = localStorage.getItem("user");
  return accessToken && user;
};

// ✅ Delete a cookie by name
export function deleteCookie(name) {
  if (!isBrowser) return; // prevent SSR crash
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict`;
}

// ✅ Delete both access and refresh tokens
export function clearAuthCookies() {
  if (!isBrowser) return;
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}
