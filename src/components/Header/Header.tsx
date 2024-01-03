import React from "react";
import styles from "./header.module.scss";
import { Button } from "components/shared/Button";
import { useThemeContext } from "components/ThemeProvider/ThemeProvider";
import { useStores } from "hooks/useStores";

const Header = () => {
  const { auth } = useStores();

  const onUserRemove = () => {
    auth.removeUser();
  };

  const { onThemeChange } = useThemeContext();
  return (
    <header className={styles.header}>
      <h1>Hello {auth.user.email}</h1>
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
