import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./filterUsers.module.scss";
import { filterUsers } from "functions/filterUser";
import { loadingImagesForUserFromTheServer } from "store/slices/ImagesCollectionSlice";
import { Input } from "components/shared/Input";
import { useAppSelector } from "hooks/useAppSelector";

const FilterUsers = () => {
  const { users } = useAppSelector(state => state.imagesCollection);
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState(users);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredUser = filterUsers(searchUser, users);
      setUsersList(filteredUser);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [searchUser]);

  const handleOnChange = (value: string) => {
    setSearchUser(value);
  };

  const handleClickSetUser = (email: string) => {
    setSearchUser("");
    dispatch(loadingImagesForUserFromTheServer(email));
  };

  return (
    <div className={styles.wrapperForSearchUserBlock}>
      <Input
        variant="outlined"
        value={searchUser}
        onChange={handleOnChange}
        placeholder="Search author"
      />
      {Boolean(searchUser.length) && usersList && (
        <ul className={styles.userListBlock}>
          {usersList.map(el => (
            <li key={Math.random()} onClick={() => handleClickSetUser(el)}>
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { FilterUsers };