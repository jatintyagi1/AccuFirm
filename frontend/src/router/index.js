import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import Dashboard from "../pages/Dashboard";
import Days from "../pages/Days";
import Customer from "../pages/Customer";
import Patient from "../pages/Patient";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/customer" element={<PrivateRoute component={Customer} />} />
            <Route path="/patient" element={<PrivateRoute component={Patient} />} />
            <Route path="/days" element={<PrivateRoute component={Days} />} />
            <Route path="/logout" element={<PrivateRoute component={Logout} />} />
            <Route path="/login" element={<PublicRoute component={Login} />} />
        </Routes>
    );
}

export default Router;
