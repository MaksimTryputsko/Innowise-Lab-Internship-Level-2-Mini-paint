import RootStore from "store/rootStore";
import { createContext, useContext } from "react";

export const RootStoreContext = createContext<RootStore>(new RootStore());

export const useStores = () => {
  const context = useContext(RootStoreContext);
  return context;
};
