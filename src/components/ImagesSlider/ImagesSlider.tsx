import React, { useEffect } from "react";

import styles from "./imagesSlider.module.scss";
import { useStores } from "hooks/useStores";
import { observer } from "mobx-react-lite";

const ImagesSlider = observer(() => {
  const { imagesCollection } = useStores();
  const images = imagesCollection.images;
  const userImages = imagesCollection.userImages;

  useEffect(() => {
    imagesCollection.loadingImages();
  }, []);

  if (!images.length) {
    return null;
  }
  
  return (
    <div className={styles.wrapperForSliderImages}>
      {(!userImages.length ? images : userImages).map(image => {
        return (
          <div key={image.id} className={styles.wrapperForImage}>
            <h2>{image.email}</h2>
            <img src={image.image} alt="logo" />
          </div>
        );
      })}
    </div>
  );
});

export { ImagesSlider };
