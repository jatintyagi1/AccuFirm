import React from "react";
import { Navigate } from "react-router-dom";
import * as authService from "../auth";

const PrivateRoute = ({ component: Component }) => {
    return authService.token.get() ? <Component /> : <Navigate to="/login" />;
    //return  <Component />
};

export default PrivateRoute;
