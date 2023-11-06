import { useStores } from "./useStores";

export const useAuth = () => {
  const { auth } = useStores();
  const { email, id } = auth.user;

  return { isAuth: Boolean(email), email, id };
};
