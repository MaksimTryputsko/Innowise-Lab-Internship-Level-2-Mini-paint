import React from "react";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "constants/addressPages";
import styles from "./entry.module.scss";
import { Login } from "components/EntryComponents/Login";
import { Button } from "components/shared/Button";

const LoginPage = () => {
  return (
    <div className={styles.mainBlock}>
      <h1>Login</h1>
      <div className={styles.entryToApp}>
        <Login />
      </div>
      <div className={styles.blockChangePage}>
        <span>You don&#8217;t have account ?</span>
        <Link to={REGISTER_PAGE}>
          <Button variant="outlined">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export { LoginPage };
