import { IImage } from "constants/interfaces";

export const filterImagesForUser = (images: IImage[], userEmail: string) => {
  const userImages = images.filter(image => image.email === userEmail);
  return userImages;
};
