import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import styles from "./themeProvider.module.scss";
import classNames from "classnames";
import {
  DARK_THEME,
  KEY_THEME_LOCALSTORAGE,
  LIGHT_THEME,
} from "constants/valuesTheme";

interface IThemeContext {
  onThemeChange: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  onThemeChange: () => "default value",
});

export const useThemeContext = () => useContext<IThemeContext>(ThemeContext);

interface IPropsThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IPropsThemeProvider) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const classes = classNames(styles.default, {
    [styles.light]: theme === LIGHT_THEME,
    [styles.dark]: theme === DARK_THEME,
  });

  const onThemeChange = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);

    localStorage.setItem(
      KEY_THEME_LOCALSTORAGE,
      theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
    );
  };

  useLayoutEffect(() => {
    const attributeFromLocalStorage = localStorage.getItem(
      KEY_THEME_LOCALSTORAGE,
    );

    if (!attributeFromLocalStorage) {
      return setTheme(LIGHT_THEME);
    }

    return setTheme(attributeFromLocalStorage);
  }, []);

  return (
    <ThemeContext.Provider value={{ onThemeChange }}>
      <div className={classes}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
