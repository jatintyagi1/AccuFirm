import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import UserContext from './Context/UserContext';
import PrivateRoute from './utils/PrivateRoute';

import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
