export const filterUsers = (searchText: string, listOfUsers: string[]) => {
  if (!searchText) {
    return listOfUsers;
  }
  return listOfUsers.filter(el =>
    el.toLowerCase().includes(searchText.toLowerCase()),
  );
};
