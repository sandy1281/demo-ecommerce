// Save access token with expiry time (in seconds)
export function setAuthCookies(accessToken, expiresInSeconds) {
  const expiryDate = new Date(Date.now() + expiresInSeconds * 1000).toUTCString();
  document.cookie = `accessToken=${accessToken}; expires=${expiryDate}; path=/; Secure; SameSite=Strict`;
}
// Save refresh token with expiry time (default: 7 days)
export function setRefreshCookies(refreshToken, expiresInSeconds = 7 * 24 * 60 * 60) {
  const expiryDate = new Date(Date.now() + expiresInSeconds * 1000).toUTCString();
  document.cookie = `refreshToken=${refreshToken}; expires=${expiryDate}; path=/; Secure; SameSite=Strict`;
}

// Read a cookie by name
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}


export const isLoggedIn = () => {
  const accessToken = getCookie("accessToken"); // or use refresh token if you prefer
  const user = localStorage.getItem("user");
  return accessToken && user;
};

// Delete a cookie by name
export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure; SameSite=Strict`;
}

// Example usage to delete access and refresh tokens
export function clearAuthCookies() {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}
