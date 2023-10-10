import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { Provider } from "react-redux";
import "./firebase";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
