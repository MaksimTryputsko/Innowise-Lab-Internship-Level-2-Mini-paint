import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { useAuthor } from "hooks/useAuthor";
import { HOME_PAGE } from "constants/addressPages";
import { loadingDataFromTheServerRegistrationUser } from "store/slices/userSlices";

const SignUp: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuthor();

  const handleRegister = (email: string, password: string) => {
    dispatch(
      loadingDataFromTheServerRegistrationUser({
        email: email,
        password: password,
      }),
    );
  };

  if (isAuth) {
    navigate(HOME_PAGE);
  }
  return <Form title="register" handleClick={handleRegister} />;
});

SignUp.displayName = "SignUp";

export { SignUp };
