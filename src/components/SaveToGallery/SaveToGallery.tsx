import React from "react";
import { Button } from "components/shared/Button";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { setImageToServer } from "store/slices/ImagesCollectionSlice";
import { useAppSelector } from "hooks/useAppSelector";

const SaveToGallery = () => {
  const { id, email } = useAuth();
  const dispatch = useDispatch();
  const { canvas } = useAppSelector(state => state.canvas);

  const handleClickSaveToSeverImage = () => {
    if (!canvas) {
      return;
    }
    const idForServer = nanoid(10);
    const date = new Date();

    dispatch(
      setImageToServer({
        userId: id,
        imgURL: canvas.toDataURL(),
        id: idForServer,
        email,
        datePublication: `${date}`,
      }),
    );
  };

  return <Button onClick={handleClickSaveToSeverImage}>SAVE TO GALLERY</Button>;
};

export { SaveToGallery };
