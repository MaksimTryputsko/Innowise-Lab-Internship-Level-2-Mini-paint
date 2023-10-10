import React from "react";
import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "pages/EntryPages/RegisterPage";
import { LoginPage } from "pages/EntryPages/LoginPage";
import { HomePage } from "pages/HomePage";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "constants/addressPages";
import { LIGHT_THEME, attribute } from "constants/valuesTheme";

function App() {
  const attributeFromLocalStorage = localStorage.getItem(attribute);
  if (!attributeFromLocalStorage) {
    document.documentElement.setAttribute(attribute, LIGHT_THEME);
  } else {
    document.documentElement.setAttribute(attribute, attributeFromLocalStorage);
  }

  return (
    <Routes>
      <Route element={<HomePage />} path={HOME_PAGE}></Route>
      <Route element={<RegisterPage />} path={REGISTER_PAGE}></Route>
      <Route element={<LoginPage />} path={LOGIN_PAGE}></Route>
    </Routes>
  );
}

export default App;
