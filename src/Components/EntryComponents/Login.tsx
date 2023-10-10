import React from "react";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuthor } from "hooks/useAuthor";
import { HOME_PAGE } from "constants/addressPages";
import { loadingDataFromTheServerLoginUser } from "store/slices/userSlices";

const Login: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuthor();

  const handleLogin = (email: string, password: string) => {
    dispatch(
      loadingDataFromTheServerLoginUser({ email: email, password: password }),
    );
  };

  if (isAuth) {
    navigate(HOME_PAGE);
  }
  return <Form title="sign in" handleClick={handleLogin} />;
});

Login.displayName = "Login";

export { Login };
