import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux'
import { store } from "./app/store";
import AuthGuard from "./components/auth";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <AuthGuard>
        <ToastContainer />
        <App />

      </AuthGuard>
    </Provider>
  </BrowserRouter >

)
