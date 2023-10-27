import React, { useEffect } from "react";
import { AuthForm } from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { HOME_PAGE } from "constants/addressPages";
import { loadingDataFromTheServerLoginUser } from "store/slices/userSlices";

const Login: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_PAGE);
    }
  });

  const onUserLogIn = (email: string, password: string) => {
    dispatch(loadingDataFromTheServerLoginUser({ email, password }));
  };

  return <AuthForm title="sign in" onClick={onUserLogIn} />;
});

Login.displayName = "Login";

export { Login };
