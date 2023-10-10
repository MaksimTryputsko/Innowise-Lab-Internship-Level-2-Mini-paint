import { IStateImages } from "constants/interfacesIState";

export const dateSort = (a: IStateImages, b: IStateImages) => {
  const firstElement: Date = new Date(a.datePublication);
  const secondElement: Date = new Date(b.datePublication);
  return secondElement.valueOf() - firstElement.valueOf();
};
