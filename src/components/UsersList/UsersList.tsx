import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./usersList.module.scss";
import { loadingImagesForUser } from "store/slices/ImagesCollectionSlice";
import { Input } from "components/shared/Input";
import { useAppSelector } from "hooks/useAppSelector";
import { debounce } from "lodash";

const UsersList = () => {
  const { users } = useAppSelector(state => state.imagesCollection);
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState(users);
  const [searchingUser, setSearchingUser] = useState("");

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
    dispatch(loadingImagesForUser(email));
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
