import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { Provider } from "react-redux";
import "./firebase";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "components/ThemeProvider/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
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
    </ThemeProvider>
  </BrowserRouter>,
);
