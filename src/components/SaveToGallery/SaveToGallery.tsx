import React from "react";
import { Button } from "components/shared/Button";
import { useAuth } from "hooks/useAuth";
import { nanoid } from "nanoid";
import canvasState from "store/canvasState";
import { useStores } from "hooks/useStores";

const SaveToGallery = () => {
  const { email } = useAuth();
  const { imagesCollection } = useStores();

  const onImageSave = () => {
    if (!canvasState.canvas || !email) {
      return;
    }
    const idForServer = nanoid(10);
    const publicationDate = new Date();

    imagesCollection.saveImage({
      image: canvasState.canvas.toDataURL(),
      id: idForServer,
      email,
      publicationDate: `${publicationDate}`,
    });
  };

  return (
    <Button onClick={onImageSave} variant="outlined">
      SAVE TO GALLERY
    </Button>
  );
};

export { SaveToGallery };
