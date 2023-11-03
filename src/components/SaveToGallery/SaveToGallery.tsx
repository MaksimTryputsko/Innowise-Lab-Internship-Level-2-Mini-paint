import React from "react";
import { Button } from "components/shared/Button";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { saveImage } from "store/slices/ImagesCollectionSlice";
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
    const publicationDate = new Date();
    dispatch(
      saveImage({
        image: canvas.toDataURL(),
        id: idForServer,
        email,
        publicationDate: `${publicationDate}`,
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
