import { IImages } from "constants/interfaces";

export const sortImagesByDate = (firstImage: IImages, secondImage: IImages) => {
  const firstDateOfPublication: Date = new Date(firstImage.datePublication);
  const secondDateOfPublication: Date = new Date(secondImage.datePublication);
  return secondDateOfPublication.valueOf() - firstDateOfPublication.valueOf();
};
