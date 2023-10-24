import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./filterUsers.module.scss";
import { filterUsers } from "functions/filterUser";
import { loadingImagesForUserFromTheServer } from "store/slices/ImagesCollectionSlice";
import { Input } from "components/shared/Input";
import { useAppSelector } from "hooks/useAppSelector";

const FilterUsers = () => {
  const { usersFromDataBase } = useAppSelector(state => state.imagesCollection);
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState(usersFromDataBase);
  const [searchingUser, setSearchingUser] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredUsers = filterUsers(searchingUser, usersFromDataBase);
      setUsersList(filteredUsers);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [searchingUser]);

  const onUserChange = (value: string) => {
    setSearchingUser(value);
  };

  const onUserSet = (email: string) => {
    setSearchingUser("");
    dispatch(loadingImagesForUserFromTheServer(email));
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
          {usersList.map(user => (
            <li key={user} onClick={() => onUserSet(user)}>
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { FilterUsers };
