import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function NotFound({ user }) {
  if (!user) return <Navigate to="/login" />;
  return <Navigate to="/" />;
}

export default NotFound;
