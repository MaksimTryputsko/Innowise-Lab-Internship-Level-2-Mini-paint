import React from "react";
import styles from "./entry.module.scss";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "constants/addressPages";
import { SignUp } from "components/EntryComponents/SignUp";
import { Button } from "components/shared/Button";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onNavigateClick = () => {
    navigate(LOGIN_PAGE);
  };

  return (
    <div className={styles.mainBlock}>
      <h1>Register</h1>
      <div className={styles.entryToApp}>
        <SignUp />
      </div>
      <div className={styles.blockChangePage}>
        <span>Already have account ?</span>
        <Button variant="outlined" onClick={onNavigateClick}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export { RegisterPage };
