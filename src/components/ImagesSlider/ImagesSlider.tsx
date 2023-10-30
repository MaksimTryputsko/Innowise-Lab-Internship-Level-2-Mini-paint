import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadingImages } from "store/slices/ImagesCollectionSlice";
import styles from "./imagesSlider.module.scss";
import { useAppSelector } from "hooks/useAppSelector";

const ImagesSlider = () => {
  const dispatch = useDispatch();
  const { images } = useAppSelector(state => state.imagesCollection);

  useEffect(() => {
    dispatch(loadingImages());
  }, []);

  if (!images.length) {
    return null;
  }

  return (
    <div className={styles.wrapperForSliderImages}>
      {images.map(image => {
        return (
          <div key={image.id} className={styles.wrapperForImage}>
            <h2>{image.email}</h2>
            <img src={image.image} alt="logo" />
          </div>
        );
      })}
    </div>
  );
};

export { ImagesSlider };
