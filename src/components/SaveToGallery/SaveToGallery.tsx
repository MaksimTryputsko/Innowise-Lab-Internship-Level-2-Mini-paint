import React from "react";
import { Button } from "components/shared/Button";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { setImageToServer } from "store/slices/ImagesCollectionSlice";
import { useAppSelector } from "hooks/useAppSelector";

const SaveToGallery = () => {
  const { email } = useAuth();
  const dispatch = useDispatch();
  const { canvas } = useAppSelector(state => state.canvas);

  const onImageSave = () => {
    if (!canvas) {
      return;
    }

    const idForServer = nanoid(10);
    const dateOfPublication = new Date();
    dispatch(
      setImageToServer({
        image: canvas.toDataURL(),
        id: idForServer,
        email,
        datePublication: `${dateOfPublication}`,
      }),
    );
  };

  return (
    <Button onClick={onImageSave} variant="outlined">
      SAVE TO GALLERY
    </Button>
  );
};

export { SaveToGallery };
