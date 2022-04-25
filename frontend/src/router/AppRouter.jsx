import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

// Auth Router
import AuthRouter from "./AuthRouter";
import { PublicRouter } from "./PublicRoute";
import { PrivateRouter } from "./PrivateRoute";

// App
import { App } from "../components/core/App";

export default function AppRouter() {
  const { auth, verifyToken } = React.useContext(AuthContext);

  React.useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/auth/*"
              element={
                <PublicRouter>
                  <AuthRouter />
                </PublicRouter>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRouter>
                  <App />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
