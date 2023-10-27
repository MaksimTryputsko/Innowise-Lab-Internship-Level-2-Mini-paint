import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlices";
import styles from "./header.module.scss";
import { Button } from "components/shared/Button";
import { useThemeContext } from "components/ThemeProvider/ThemeProvider";

const Header = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();

  const onUserRemove = () => {
    dispatch(removeUser());
  };

  const { onThemeChange } = useThemeContext();

  return (
    <header className={styles.header}>
      <h1>Hello {email}</h1>
      <div>
        <Button onClick={onThemeChange} variant="outlined">
          Change Theme
        </Button>
        <Button onClick={onUserRemove} variant="outlined">
          EXIT
        </Button>
      </div>
    </header>
  );
};

export { Header };
