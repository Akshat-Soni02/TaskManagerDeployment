import React, { createContext, useState, useContext } from "react";
import { loginUser, logoutUser } from "./services/ApiServices.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (data) => {
    try {
        const response = await loginUser(data);
        setIsAuthenticated(true);
    } catch (error) {
        console.log(error);
        throw error;
    }
    console.log("reaches here")
  }

  const logout = async () => {
    try {
        const response = await logoutUser();
        setIsAuthenticated(false);
    } catch (error) {
        console.log(error)
        throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated, loading, setLoading, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
