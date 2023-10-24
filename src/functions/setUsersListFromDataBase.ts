import { IImages } from "constants/interfaces";

export const setUsersListFromDataBase = (
  usersFromDataBase: Record<string, IImages & string>[],
) => {
  const usersList = usersFromDataBase.map(
    user => user[Object.keys(user)[Object.keys(user).length - 1]],
  );
  return usersList;
};
