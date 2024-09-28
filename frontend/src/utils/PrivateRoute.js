import React from 'react';
import { Navigate } from 'react-router-dom';
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem(ACCESS_TOKEN_NAME);

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
