import { Button } from "components/shared/Button";
import { Input } from "components/shared/Input";
import React, { useState } from "react";

interface IFormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form = ({ title, handleClick }: IFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (text: string) => {
    setEmail(text);
  };
  const onChangePassword = (text: string) => {
    setPassword(text);
  };
  const handleClickButton = () => {
    handleClick(email, password);
  };

  return (
    <div>
      <Input
        type="email"
        value={email}
        placeholder="email"
        onChange={onChangeEmail}
      />
      <Input
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="password"
      />
      <Button onClick={handleClickButton}> {title}</Button>
    </div>
  );
};

export { Form };
