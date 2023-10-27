import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthForm } from "./AuthForm";
import { useAuth } from "hooks/useAuth";
import { HOME_PAGE } from "constants/addressPages";
import { loadingDataFromTheServerRegistrationUser } from "store/slices/userSlices";

const SignUp: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_PAGE);
    }
  });

  const onUserRegister = (email: string, password: string) => {
    dispatch(
      loadingDataFromTheServerRegistrationUser({
        email,
        password,
      }),
    );
  };

  return <AuthForm title="register" onClick={onUserRegister} />;
});

SignUp.displayName = "SignUp";

export { SignUp };
