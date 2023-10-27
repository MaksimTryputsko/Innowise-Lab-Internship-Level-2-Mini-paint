import React from "react";
import styles from "./buttonIcon.module.scss";
import classNames from "classnames";

interface IPropsIconImage {
  image: string;
  description: string;
  onClick: () => void;
  size?: string;
  disabled?: boolean;
}

const ButtonIcon = ({
  image,
  description,
  onClick,
  size = "M",
  disabled = false,
}: IPropsIconImage) => {
  const classesSizes = classNames({
    [styles.small]: size === "S",
    [styles.medium]: size === "M",
    [styles.large]: size === "L",
  });

  return (
    <button onClick={onClick} className={styles.iconButton} disabled={disabled}>
      <img src={image} alt={description} className={classesSizes} />
    </button>
  );
};

export { ButtonIcon };
