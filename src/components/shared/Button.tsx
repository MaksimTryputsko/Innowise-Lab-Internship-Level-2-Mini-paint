import React from "react";
import ButtonMUI from "@mui/material/Button";

interface IPropsButton {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({ children, onClick }: IPropsButton) => {
  return (
    <ButtonMUI variant="outlined" onClick={onClick} color="secondary">
      {children}
    </ButtonMUI>
  );
};

export { Button };
