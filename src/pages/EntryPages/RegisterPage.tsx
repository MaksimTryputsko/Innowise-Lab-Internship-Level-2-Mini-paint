import React from "react";
import styles from "./entry.module.scss";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "constants/addressPages";
import { SignUp } from "Components/EntryComponents/SignUp";
import { Button } from "Components/Shared/Button";

const RegisterPage = () => {
  return (
    <div className={styles.mainBlock}>
      <h1>Register</h1>
      <div className={styles.entryToApp}>
        <SignUp />
      </div>
      <div className={styles.blockChangePage}>
        <span>Already have account ?</span>
        <Link to={LOGIN_PAGE}>
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  );
};

export { RegisterPage };
