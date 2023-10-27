import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  // const { email, id } = useAppSelector(state => state.user);
  const { email, id } = {
    email: "helloagent@gmail.com",
    id: "82828iai12321",
  };
  return { isAuth: Boolean(email), email, id };
};
