// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={
        user ? <Component {...rest} /> : <Navigate to="/login" replace />
      }
    />
  );
};

export default PrivateRoute;
