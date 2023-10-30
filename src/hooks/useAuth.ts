import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  // const { email, id } = useAppSelector(state => state.user);
  const { email, id } = {
    email: "masfas@gmail.com",
    id: "21321asdas",
  };

  return { isAuth: Boolean(email), email, id };
};
