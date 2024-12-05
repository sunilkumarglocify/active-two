import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean | null;
  login: () => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const storedLoggedInUser = localStorage.getItem("loggedInUser");
  useEffect(() => {
    // Check localStorage for authentication status when component mounts

    if (storedLoggedInUser) {
      setIsLoggedIn(true);
      setIsLoading(false);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, [storedLoggedInUser]);

  const login = () => {
    // Perform login logic, e.g., API call
    setIsLoggedIn(true);
    // Store authentication status in localStorage
    localStorage.setItem("loggedInUser", "true");
  };

  const logout = () => {
    // Perform logout logic, e.g., clear token
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  const isAuthenticated = () => {
    // Check if user is authenticated
    return isLoggedIn === true;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
