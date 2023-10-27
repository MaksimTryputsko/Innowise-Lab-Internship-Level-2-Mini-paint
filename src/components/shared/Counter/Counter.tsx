import React, { useState } from "react";
import styles from "./counter.module.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface IPropsCounter {
  onClick: (value: number) => void;
}

const Counter = ({ onClick }: IPropsCounter) => {
  const [counter, setCounter] = useState(1);

  const onCounterIncrease = () => {
    setCounter(counter + 1);
    onClick(counter + 1);
  };

  const onCounterReduce = () => {
    setCounter(counter - 1);
    onClick(counter - 1);
  };

  return (
    <div className={styles.counterLineWidth}>
      <ButtonIcon
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Minus.svg/1200px-Minus.svg.png"
        description="minus"
        onClick={onCounterReduce}
        size="M"
        disabled={counter <= 1 ? true : false}
      />
      <span>{counter}</span>
      <ButtonIcon
        image="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png"
        description="plus"
        onClick={onCounterIncrease}
        size="M"
        disabled={counter >= 50 ? true : false}
      />
    </div>
  );
};

export { Counter };
