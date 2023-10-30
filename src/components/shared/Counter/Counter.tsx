import React, { useState } from "react";
import styles from "./counter.module.scss";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { MinusIcon } from "components/icons/counter/Minus";
import { PlusIcon } from "components/icons/counter/Plus";

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
      <ButtonIcon onClick={onCounterReduce} disabled={counter <= 1}>
        <MinusIcon />
      </ButtonIcon>
      <span>{counter}</span>
      <ButtonIcon onClick={onCounterIncrease} disabled={counter >= 50}>
        <PlusIcon />
      </ButtonIcon>
    </div>
  );
};

export { Counter };
