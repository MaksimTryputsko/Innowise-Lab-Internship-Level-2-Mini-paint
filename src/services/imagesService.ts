import toast from "react-hot-toast";
import FirebaseDataBaseService, {
  DataBaseService,
} from "./firebaseDataBaseService";

interface IImageDescription {
  datePublication: string;
  email: string;
  id: string;
  image: string;
}

interface IImagesService {
  getImagesCollection(
    nameOfCollection: string,
  ): Promise<{ id: string }[] | undefined>;
  saveImage(
    nameOfCollection: string,
    userEmail: string,
    imageId: string,
    imageDescription: IImageDescription,
  ): void;
}

class ImagesService implements IImagesService {
  constructor(public dataBaseService: DataBaseService) {}
  async getImagesCollection(nameOfCollection: string) {
    try {
      return await this.dataBaseService.getDocuments(nameOfCollection);
    } catch (err) {
      toast.error("Sorry we have problem with server !");
    }
  }

  async saveImage(
    nameOfCollection: string,
    userEmail: string,
    imageId: string,
    imageDescription: IImageDescription,
  ) {
    try {
      const document = {
        [imageId]: imageDescription,
      };
      await this.dataBaseService.saveDocument<IImageDescription>(
        nameOfCollection,
        userEmail,
        document,
      );
    } catch (err) {
      toast.error("Sorry we have problem with server !");
    }
  }
}

export const imagesService = new ImagesService(new FirebaseDataBaseService());
