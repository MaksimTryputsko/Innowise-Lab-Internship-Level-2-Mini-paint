import { IImages } from "constants/interfaces";
import { sortImages } from "./sortImages";

export const filterImagesForUser = (
  imagesFromDataBase: Record<string, IImages & string>[],
  userEmail: string,
) => {
  const images = imagesFromDataBase.filter(image => image.id === userEmail);
  return sortImages(images);
};
