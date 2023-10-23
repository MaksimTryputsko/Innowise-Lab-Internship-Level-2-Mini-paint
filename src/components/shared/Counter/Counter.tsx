import React, { useState } from "react";
import styles from "./counter.module.scss";

interface IPropsCounter {
  handleClick: (value: number) => void;
}

const Counter = ({ handleClick }: IPropsCounter) => {
  const [count, setCount] = useState(1);

  const handleClickPlus = () => {
    if (count < 50) {
      setCount(count + 1);
      handleClick(count + 1);
    }
  };

  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      handleClick(count - 1);
    }
  };

  return (
    <div className={styles.countLineWidth}>
      <button onClick={handleClickMinus}>-</button>
      <span>{count}</span>
      <button onClick={handleClickPlus}>+</button>
    </div>
  );
};

export { Counter };
