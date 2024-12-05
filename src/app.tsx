import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import Dashboard from "./component/dashboard";
import LoginForm from "./component/auth";
import { AuthProvider, useAuth } from "./context/auth/auth-context";
import ActivityManagement from "./component/activity-management";
import CustomerInsight from "./component/customer-insight";
import SignInOut from "./component/sign-in-out";
import Coupons from "./component/coupons";
import BusinessProfile from "./component/business-profile";
import Reviews from "./component/reviews";
import Reports from "./component/reports";
import Shop from "./component/shop";
import Campaign from "./component/campaign";
import Settings from "./component/settings";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const root = createRoot(document.getElementById("app"));

interface PrivateRouteProps {
  element: React.ReactNode;
  path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <React.Fragment>{element}</React.Fragment>
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <HashRouter>
          <Routes>
            <Route index element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route
              path="/activity-management"
              element={<PrivateRoute element={<ActivityManagement />} />}
            />
            <Route
              path="/customer-insight"
              element={<PrivateRoute element={<CustomerInsight />} />}
            />
            <Route
              path="/sign-in-out"
              element={<PrivateRoute element={<SignInOut />} />}
            />
            <Route
              path="/coupons"
              element={<PrivateRoute element={<Coupons />} />}
            />
            <Route
              path="/business-profile"
              element={<PrivateRoute element={<BusinessProfile />} />}
            />
            <Route path="/shop" element={<PrivateRoute element={<Shop />} />} />
            <Route
              path="/campaign"
              element={<PrivateRoute element={<Campaign />} />}
            />
            <Route
              path="/reviews"
              element={<PrivateRoute element={<Reviews />} />}
            />
            <Route
              path="/reports"
              element={<PrivateRoute element={<Reports />} />}
            />

            <Route
              path="/settings"
              element={<PrivateRoute element={<Settings />} />}
            />

            <Route path="*" element={<LoginForm />} />
          </Routes>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
