import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { dataBase } from "../firebase";

export interface DataBaseService {
  getDocuments(nameOfCollection: string): Promise<{ id: string }[] | undefined>;
  saveDocument<DOCUMENT_SAVE>(
    nameOfCollection: string,
    idCollection: string,
    document: { [x: string]: DOCUMENT_SAVE },
  ): void;
}

export default class FirebaseDataBaseService implements DataBaseService {
  async getDocuments(nameOfCollection: string) {
    const imagesCollectionRef = collection(dataBase, nameOfCollection);
    const data = await getDocs(imagesCollectionRef);
    const filterData = data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filterData;
  }
  async saveDocument<DOCUMENT_SAVE>(
    nameOfCollection: string,
    idCollection: string,
    document: { [x: string]: DOCUMENT_SAVE },
  ) {
    await setDoc(doc(dataBase, nameOfCollection, idCollection), document, {
      merge: true,
    });
  }
}
