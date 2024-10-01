import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import UserContext from './Context/UserContext';
import PrivateRoute from './utils/PrivateRoute';

import DashboardPage from './Pages/DashboardPage';
import CustomerPage from './Pages/CustomerPage';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import DaysPage from "./Pages/DaysPage";
import AntdForm from "./Pages/antdForm";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          {/* Use PrivateRoute for authenticated routes */}
          <Route
            path="/"
            element={<PrivateRoute><DashboardPage /></PrivateRoute>}
          />
          <Route
            path="/customer"
            element={<PrivateRoute><CustomerPage /></PrivateRoute>}
          />
          <Route
            path="/days"
            element={<PrivateRoute><DaysPage /></PrivateRoute>}
          />
          <Route
            path="/antd"
            element={<PrivateRoute><AntdForm /></PrivateRoute>}
          />

          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Fallback to NotFound for unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  );
}

export default App;
