import React from "react";
import './App.css';

import Router from './router';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
