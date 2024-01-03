import React, { useDeferredValue, useEffect, useState } from "react";
import styles from "./usersList.module.scss";
import { Input } from "components/shared/Input";
import { debounce } from "lodash";
import { useStores } from "hooks/useStores";

const UsersList = () => {
  const { imagesCollection } = useStores();
  const users = imagesCollection.users;

  const [usersList, setUsersList] = useState(users);
  const [searchingUser, setSearchingUser] = useState("");
  const deferredUsersList = useDeferredValue(usersList);

  useEffect(() => {
    const debounceSearch = debounce(() => {
      const user = users.filter(user =>
        user.toLowerCase().includes(searchingUser.toLowerCase()),
      );
      setUsersList(user);
    }, 300);

    debounceSearch();
    return () => debounceSearch.cancel();
  }, [searchingUser]);

  const onUserChange = (value: string) => {
    setSearchingUser(value);
  };

  const onUserClick = (email: string) => {
    setSearchingUser("");
    imagesCollection.getUserImages(email);
  };

  return (
    <div className={styles.wrapperForSearchUserBlock}>
      <Input
        variant="outlined"
        value={searchingUser}
        onChange={onUserChange}
        placeholder="Search author"
      />
      {Boolean(searchingUser.length) && usersList && (
        <ul className={styles.userListBlock}>
          {deferredUsersList.map(user => (
            <li key={user} onClick={() => onUserClick(user)}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { UsersList };
