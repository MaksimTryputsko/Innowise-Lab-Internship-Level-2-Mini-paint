import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { dataBase } from "../firebase";
import { IImage } from "constants/interfaces";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";

export interface IImagesRepository {
  getImagesList(): Promise<Record<string, IImage>[]>;
  saveImage(idCollection: string, document: { [x: string]: IImage }): void;
}

export default class ImagesRepository implements IImagesRepository {
  async getImagesList() {
    const imagesCollectionRef = collection(dataBase, IMAGES_COLLECTION);
    const data = await getDocs(imagesCollectionRef);
    const filterData = data.docs.map(doc => ({
      ...doc.data(),
    }));
    return filterData;
  }

  async saveImage(idCollection: string, document: { [x: string]: IImage }) {
    await setDoc(doc(dataBase, IMAGES_COLLECTION, idCollection), document, {
      merge: true,
    });
  }
}
