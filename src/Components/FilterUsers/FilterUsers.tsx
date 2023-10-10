import { IState } from "constants/interfacesIState";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./filterUsers.module.scss";
import { filterUsers } from "functions/filterUser";
import { loadingImagesForUserFromTheServer } from "store/slices/ImagesCollectionSlice";

const FilterUsers = () => {
  const { users } = useSelector((state: IState) => state.imagesCollection);
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchUser(e.target.value);
  };

  const handleClickSetUser = (email: string) => {
    setSearchUser("");
    dispatch(loadingImagesForUserFromTheServer(email));
  };

  return (
    <div className={styles.wrapperForSearchUserBlock}>
      <input
        className={styles.searchInput}
        type="text"
        value={searchUser}
        onChange={handleOnChange}
        placeholder="Search author"
      />
      {searchUser.length > 0 && usersList && (
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
