import React from "react";
import { Button } from "Components/Shared/Button";
import { useAuthor } from "hooks/useAuthor";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { setImageToServer } from "store/slices/ImagesCollectionSlice";
import { IState } from "constants/interfacesIState";

const SaveToGallery = () => {
  const { id, email } = useAuthor();
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: IState) => state.canvas);

  const handleClickSaveToSeverImage = () => {
    const idForServer = nanoid(10);
    const date = new Date();

    if (canvas) {
      dispatch(
        setImageToServer({
          userId: id,
          imgURL: canvas.toDataURL(),
          id: idForServer,
          email,
          datePublication: `${date}`,
        }),
      );
    }
  };

  return <Button onClick={handleClickSaveToSeverImage}>SAVE TO GALLERY</Button>;
};

export { SaveToGallery };
