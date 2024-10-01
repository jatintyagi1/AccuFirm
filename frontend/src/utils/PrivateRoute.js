import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(UserContext);

  // Check if user is authenticated
  return userData.token ? children : <Navigate to="/login" />;
  //return children;
};

export default PrivateRoute;
