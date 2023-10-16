import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { Provider } from "react-redux";
import "./firebase";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            border: "5px solid #713200",
            fontSize: "25px",
          },
        }}
      />
    </Provider>
  </BrowserRouter>,
);
