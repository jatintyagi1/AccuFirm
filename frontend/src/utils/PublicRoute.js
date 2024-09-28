import React from "react";
import { Route, Navigate } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../config/serverApiConfig";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            element={
                localStorage.getItem(ACCESS_TOKEN_NAME) && restricted ? (
                    <Navigate to="/" />
                ) : (
                    <Component {...rest} />
                )
            }
        />
    );
};

export default PublicRoute;
