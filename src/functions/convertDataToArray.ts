import { IStateImages } from "constants/interfacesIState";
import { dateSort } from "./sortArrayDate";

export const convertDataToArray = (data: any) => {
  const newTest = data.map((el: any) => Object.entries(el));
  const imagesArray: IStateImages[] = [];
  newTest.forEach((el: any) => el.map((el: any) => imagesArray.push(el[1])));
  const filterImagesArray = imagesArray.filter(el => typeof el !== "string");
  const sortedImagesArray = filterImagesArray.sort(dateSort);
  return sortedImagesArray;
};
