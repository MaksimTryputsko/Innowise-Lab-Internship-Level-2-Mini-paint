import { UsersList } from "components/UsersList/UsersList";
import { Header } from "components/Header/Header";
import { ImagesSlider } from "components/ImagesSlider/ImagesSlider";
import { MiniPaint } from "components/miniPaint/MiniPaint";
import { LOGIN_PAGE } from "constants/addressPages";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const HomePage = observer(() => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE} />;
  }

  return (
    <>
      <Header/>
      <UsersList />
      <ImagesSlider/>
      <MiniPaint />
    </>
  );
});

export { HomePage };
