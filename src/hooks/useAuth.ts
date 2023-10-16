import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
  const { email, id } = useAppSelector(state => state.user);
  return { isAuth: !!email, email, id };
};
