import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadingImagesFromTheServer } from "store/slices/ImagesCollectionSlice";
import styles from "./imagesSlider.module.scss";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";
import { useAppSelector } from "hooks/useAppSelector";

const ImagesSlider = () => {
  const dispatch = useDispatch();
  const { images } = useAppSelector(state => state.imagesCollection);

  useEffect(() => {
    dispatch(loadingImagesFromTheServer(IMAGES_COLLECTION));
  }, []);

  if (!images.length) {
    return null;
  }
  return (
    <div className={styles.wrapperForSliderImages}>
      {images.map(el => {
        return (
          <div key={el.id} className={styles.wrapperForImage}>
            <h2>{el.email}</h2>
            <img src={el.image} alt="logo" />
          </div>
        );
      })}
    </div>
  );
};

export { ImagesSlider };
