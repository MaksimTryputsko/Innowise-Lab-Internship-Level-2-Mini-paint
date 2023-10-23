import React from "react";
import ButtonMUI from "@mui/material/Button";

interface IPropsButton {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "outlined" | "contained" | "text";
}
const Button = ({ children, onClick, variant }: IPropsButton) => {
  return (
    <ButtonMUI variant={variant} onClick={onClick} color="secondary">
      {children}
    </ButtonMUI>
  );
};

export { Button };
