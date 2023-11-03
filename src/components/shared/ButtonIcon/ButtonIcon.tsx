import React, { ReactNode } from "react";
import styles from "./buttonIcon.module.scss";
import classNames from "classnames";

interface IPropsIconImage {
  children: ReactNode;
  onClick: () => void;
  size?: string;
  disabled?: boolean;
}

const ButtonIcon = ({
  children,
  onClick,
  size = "M",
  disabled = false,
}: IPropsIconImage) => {
  const classesSizes = classNames(styles.iconButton, {
    [styles.small]: size === "S",
    [styles.medium]: size === "M",
    [styles.large]: size === "L",
  });

  return (
    <button onClick={onClick} className={classesSizes} disabled={disabled}>
      {children}
    </button>
  );
};

export { ButtonIcon };
