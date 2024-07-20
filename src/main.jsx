import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "alert";
// import { ToastContainer } from "react-toastify";
// import {store} from './Pages/redux/store.jsx';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider > */}
    <Toaster />
    <App />
    {/* <ToastContainer /> */}
    {/* </Provider> */}
  </React.StrictMode>
);
