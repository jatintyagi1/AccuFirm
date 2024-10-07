import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/index";
import './app/style.less';
import reportWebVitals from "./reportWebVitals";
import *  as serviceWorker from './ServiceWorker';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


reportWebVitals();
serviceWorker.unregister();
