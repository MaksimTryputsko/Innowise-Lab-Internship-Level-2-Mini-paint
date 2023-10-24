export const filterUsers = (searchingUser: string, listOfUsers: string[]) => {
  if (!searchingUser) {
    return listOfUsers;
  }
  return listOfUsers.filter(user =>
    user.toLowerCase().includes(searchingUser.toLowerCase()),
  );
};
