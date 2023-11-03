import { IImage } from "constants/interfaces";

export const setUsersList = (imagesCollection: IImage[]) => {
  const usersList = imagesCollection.map(image => image.email);
  return Array.from(new Set(usersList));
};
