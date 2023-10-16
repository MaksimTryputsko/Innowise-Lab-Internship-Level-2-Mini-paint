import { FilterUsers } from "components/FilterUsers/FilterUsers";
import { Header } from "components/Header/Header";
import { ImagesSlider } from "components/ImagesSlider/ImagesSlider";
import { MiniPaint } from "components/miniPaint/MiniPaint";
import { LOGIN_PAGE } from "constants/addressPages";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={LOGIN_PAGE} />;
  }
  return (
    <div>
      <Header />
      <FilterUsers />
      <ImagesSlider />
      <MiniPaint />
    </div>
  );
};

export { HomePage };
