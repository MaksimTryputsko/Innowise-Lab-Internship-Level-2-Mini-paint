import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import "./firebase";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "components/ThemeProvider/ThemeProvider";
import { RootStoreContext } from "hooks/useStores";
import RootStore from "store/rootStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <RootStoreContext.Provider value={new RootStore()}>
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
        </RootStoreContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
