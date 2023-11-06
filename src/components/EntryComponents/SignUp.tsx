import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "./AuthForm";
import { useAuth } from "hooks/useAuth";
import { HOME_PAGE } from "constants/addressPages";
import { useStores } from "hooks/useStores";
import { observer } from "mobx-react-lite";

const SignUp: React.FC = observer(() => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  const { auth } = useStores();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_PAGE);
    }
  });

  const onUserRegister = (email: string, password: string) => {
    auth.registration(email, password);
  };

  return <AuthForm title="register" onClick={onUserRegister} />;
});

export { SignUp };
