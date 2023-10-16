import { IImages } from "constants/interfaces";
import { convertDataToArray } from "./convertDataToArray";

export const convertDataWithUserToUserImgArray = (
  data: Record<string, IImages & string>[],
  userEmail: string,
) => {
  const filterData = data.filter(el => el.id === userEmail);
  return convertDataToArray(filterData);
};
