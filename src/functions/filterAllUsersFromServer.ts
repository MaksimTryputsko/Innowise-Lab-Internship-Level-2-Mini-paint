export const filterAllUsersFromServer = (data: any) => {
  const allUsers = data.map(
    (el: any) => el[Object.keys(el)[Object.keys(el).length - 1]],
  );
  return allUsers;
};
