import { Button } from "components/shared/Button";
import { Input } from "components/shared/Input";
import React, { useState } from "react";

interface IFormProps {
  title: string;
  onClick: (email: string, password: string) => void;
}

const Form = ({ title, onClick }: IFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
  };

  const onUserCreate = () => {
    onClick(email, password);
  };

  return (
    <div>
      <Input
        variant="outlined"
        value={email}
        placeholder="email"
        onChange={onChangeEmail}
      />
      <Input
        variant="outlined"
        value={password}
        onChange={onChangePassword}
        placeholder="password"
      />
      <Button onClick={onUserCreate} variant="outlined">
        {title}
      </Button>
    </div>
  );
};

export { Form };
