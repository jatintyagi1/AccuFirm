import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Dashboard from './views/DashboardPage';
import NotFound from './views/NotFound';
import LoginPage from "./views/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
