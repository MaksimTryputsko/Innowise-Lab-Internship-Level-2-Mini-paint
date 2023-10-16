import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form } from "./Form";
import { useAuth } from "hooks/useAuth";
import { HOME_PAGE } from "constants/addressPages";
import { loadingDataFromTheServerRegistrationUser } from "store/slices/userSlices";

const SignUp: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

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
