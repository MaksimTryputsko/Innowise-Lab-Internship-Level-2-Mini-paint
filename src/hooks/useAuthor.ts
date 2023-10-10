import { IState } from "constants/interfacesIState";
import { useSelector } from "react-redux";

export const useAuthor = () => {
  const { email, id } = useSelector((state: IState) => state.user);
  return { isAuth: !!email, email, id };
};
