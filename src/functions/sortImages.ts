import { IImages } from "constants/interfaces";
import { sortImagesByDate } from "./sortImagesByDate";

export const sortImages = (imagesFromDataBase: Record<string, IImages>[]) => {
  const imagesArray = imagesFromDataBase.map(image =>
    Object.values(image).filter(
      (filterImage, filterImageIndex) =>
        filterImageIndex !== Object.values(image).length - 1,
    ),
  );
  const images = imagesArray.flat();
  const sortedImages = images.sort(sortImagesByDate);
  return sortedImages;
};
