import React from "react";
import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "pages/EntryPages/RegisterPage";
import { LoginPage } from "pages/EntryPages/LoginPage";
import { HomePage } from "pages/HomePage";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "constants/addressPages";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path={HOME_PAGE}></Route>
      <Route element={<RegisterPage />} path={REGISTER_PAGE}></Route>
      <Route element={<LoginPage />} path={LOGIN_PAGE}></Route>
    </Routes>
  );
}

export default App;
