import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  // const { email, id } = useAppSelector(state => state.user);
  const { email, id } = {
    email: "helloWorld@gmail.com",
    id: "ove123ober123s",
  };
  return { isAuth: !!email, email, id };
};
