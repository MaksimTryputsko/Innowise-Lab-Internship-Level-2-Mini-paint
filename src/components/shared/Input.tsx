import React from "react";
import InputMUI from "@mui/joy/Input";

interface IPropsInput {
  variant: "outlined" | "solid" | "soft" | "plain";
  value?: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const Input = ({ variant, value, onChange, placeholder }: IPropsInput) => {
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputMUI
      placeholder={placeholder}
      variant={variant}
      color="neutral"
      value={value}
      onChange={onTextChange}
    />
  );
};

export { Input };
