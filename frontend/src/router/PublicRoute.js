import React from "react";
import { Navigate } from "react-router-dom";
import * as authService from "../auth";

const PublicRoute = ({ component: Component }) => {
    return authService.token.get() ? <Navigate to="/" /> : <Component />;
    //return <Component />
};

export default PublicRoute;
