import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Dashboard from './views/Dashboard';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
