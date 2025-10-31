'use client';
import { createContext, useContext, useState } from 'react';

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create provider component
export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);