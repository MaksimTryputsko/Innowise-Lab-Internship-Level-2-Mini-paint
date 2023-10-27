import toast from "react-hot-toast";
import FirebaseDataBaseService, {
  DataBaseService,
} from "./firebaseDataBaseService";
import { IImage } from "constants/interfaces";
import { sortImagesByDate } from "functions/sortImagesByDate";

interface IImageDescription {
  datePublication: string;
  email: string;
  id: string;
  image: string;
}

interface IImagesService {
  getImagesCollection(nameOfCollection: string): Promise<IImage[] | undefined>;
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
      const data =
        await this.dataBaseService.getDocuments<
          Record<string, IImage & string>[]
        >(nameOfCollection);

      if (!data) {
        return [];
      }
      const images = data.map(el => {
        delete el.id;
        return Object.values(el);
      });
      return images.flat().sort(sortImagesByDate);
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
