import React, { useState } from "react";
import styles from "./counter.module.scss";

interface IPropsCounter {
  onClick: (value: number) => void;
}

const Counter = ({ onClick }: IPropsCounter) => {
  const [counter, setCounter] = useState(1);

  const onCounterIncrease = () => {
    if (counter < 50) {
      setCounter(counter + 1);
      onClick(counter + 1);
    }
  };

  const onCounterReduce = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      onClick(counter - 1);
    }
  };

  return (
    <div className={styles.counterLineWidth}>
      <button onClick={onCounterReduce}>-</button>
      <span>{counter}</span>
      <button onClick={onCounterIncrease}>+</button>
    </div>
  );
};

export { Counter };
