import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/auth/auth-context";

interface SecureRouteProps {
  element: React.ReactNode;
  path: string;
}

const SecureRoute: React.FC<SecureRouteProps> = ({ element, path }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default SecureRoute;
