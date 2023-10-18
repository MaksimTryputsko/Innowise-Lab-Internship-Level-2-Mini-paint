import { useAuth } from "hooks/useAuth";
import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "store/slices/userSlices";
import styles from "./header.module.scss";
import { Button } from "components/shared/Button";
import {
  IThemeContext,
  useThemeContext,
} from "components/ThemeProvider/ThemeProvider";

const Header = () => {
  const dispatch = useDispatch();
  const { email } = useAuth();
  const handleClickExit = () => {
    dispatch(removeUser());
  };
  const { changeTheme } = useThemeContext() as IThemeContext;
  return (
    <header className={styles.header}>
      <h1>Hello {email}</h1>
      <div>
        <Button onClick={changeTheme}>Change Theme</Button>
        <Button onClick={handleClickExit}>EXIT</Button>
      </div>
    </header>
  );
};

export { Header };