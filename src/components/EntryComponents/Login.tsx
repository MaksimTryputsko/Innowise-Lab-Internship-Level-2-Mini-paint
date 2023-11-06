import React, { useEffect } from "react";
import { AuthForm } from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { HOME_PAGE } from "constants/addressPages";

import { useStores } from "hooks/useStores";
import { observer } from "mobx-react-lite";

const Login: React.FC = observer(() => {
  const { auth } = useStores();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_PAGE);
    }
  });

  const onUserLogIn = (email: string, password: string) => {
    auth.login(email, password);
  };

  return <AuthForm title="sign in" onClick={onUserLogIn} />;
});

export { Login };
