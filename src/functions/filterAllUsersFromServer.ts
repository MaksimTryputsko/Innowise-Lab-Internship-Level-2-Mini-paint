import { IImages } from "constants/interfaces";

export const filterAllUsersFromServer = (
  data: Record<string, IImages & string>[],
) => {
  const allUsers = data.map(
    el => el[Object.keys(el)[Object.keys(el).length - 1]],
  );
  return allUsers;
};
