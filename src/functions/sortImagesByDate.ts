import { IImage } from "constants/interfaces";

export const sortImagesByDate = (firstImage: IImage, secondImage: IImage) => {
  const firstDateOfPublication: Date = new Date(firstImage.publicationDate);
  const secondDateOfPublication: Date = new Date(secondImage.publicationDate);
  return secondDateOfPublication.valueOf() - firstDateOfPublication.valueOf();
};
