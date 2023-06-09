import { useState } from "react";
import { Route, Navigate } from "react-router-dom";

const Protected = ({ isSignedIn, children }) => {

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default Protected;
