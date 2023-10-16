import { IImages } from "constants/interfaces";
import { dateSort } from "./sortArrayDate";

export const convertDataToArray = (data: Record<string, IImages>[]) => {
  const dataToArray = data.map(el =>
    Object.values(el).filter((el2, i) => i !== Object.values(el).length - 1),
  );
  const result = dataToArray.flat();
  const sortedImagesArray = result.sort(dateSort);
  return sortedImagesArray;
};
