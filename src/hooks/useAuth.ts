import { useStores } from "./useStores";

export const useAuth = () => {
  const { auth } = useStores();
  const { email, id } = auth.user;
  // const { email, id } = {
  //   email: "dadas@gmail.com",
  //   id: "sksksk23",
  // };

  return { isAuth: Boolean(email), email, id };
};
