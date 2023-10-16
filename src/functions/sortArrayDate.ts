import { IImages } from "constants/interfaces";

export const dateSort = (a: IImages, b: IImages) => {
  const firstElement: Date = new Date(a.datePublication);
  const secondElement: Date = new Date(b.datePublication);
  return secondElement.valueOf() - firstElement.valueOf();
};
