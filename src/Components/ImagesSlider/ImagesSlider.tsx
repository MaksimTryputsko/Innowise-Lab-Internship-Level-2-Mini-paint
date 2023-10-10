import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingImagesFromTheServer } from "store/slices/ImagesCollectionSlice";
import styles from "./imagesSlider.module.scss";
import { IState } from "constants/interfacesIState";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";

const ImagesSlider = () => {
  const dispatch = useDispatch();
  const { images } = useSelector((state: IState) => state.imagesCollection);

  useEffect(() => {
    dispatch(loadingImagesFromTheServer(IMAGES_COLLECTION));
  }, []);

  return (
    <div className={styles.wrapperForSliderImages}>
      {images.length > 0 &&
        images.map(el => {
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
