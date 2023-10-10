import { FilterUsers } from "Components/FilterUsers/FilterUsers";
import { Header } from "Components/Header/Header";
import { ImagesSlider } from "Components/ImagesSlider/ImagesSlider";
import { MiniPaint } from "Components/MiniPaint/MiniPaint";
import { LOGIN_PAGE } from "constants/addressPages";
import { useAuthor } from "hooks/useAuthor";
import React from "react";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const { isAuth } = useAuthor();

  return isAuth ? (
    <div>
      <Header />
      <FilterUsers />
      <ImagesSlider />
      <MiniPaint />
    </div>
  ) : (
    <Navigate to={LOGIN_PAGE} />
  );
};

export { HomePage };
