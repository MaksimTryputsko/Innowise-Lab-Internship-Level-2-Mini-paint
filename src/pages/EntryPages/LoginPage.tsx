import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_PAGE } from "constants/addressPages";
import styles from "./entry.module.scss";
import { Login } from "components/EntryComponents/Login";
import { Button } from "components/shared/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const onNavigateClick = () => {
    navigate(REGISTER_PAGE);
  };

  return (
    <div className={styles.mainBlock}>
      <h1>Login</h1>
      <div className={styles.entryToApp}>
        <Login />
      </div>
      <div className={styles.blockChangePage}>
        <span>{"You don't have account ?"}</span>
        <Button variant="outlined" onClick={onNavigateClick}>
          Register
        </Button>
      </div>
    </div>
  );
};

export { LoginPage };
