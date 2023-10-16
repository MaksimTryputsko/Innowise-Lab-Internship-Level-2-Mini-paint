import React from "react";

interface IPropsInput {
  type: string;
  value?: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const Input = ({ type, value, onChange, placeholder }: IPropsInput) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeInput}
      placeholder={placeholder}
    />
  );
};

export { Input };
