import toast from "react-hot-toast";
import ImagesRepository, {
  IImagesRepository,
} from "../repository/imagesRepository";
import { IImage } from "constants/interfaces";

interface IImagesService {
  getImagesCollection(): Promise<IImage[] | undefined>;
  saveImage(userEmail: string, imageId: string, imageDescription: IImage): void;
}

class ImagesService implements IImagesService {
  constructor(public repository: IImagesRepository) {}

  async getImagesCollection() {
    try {
      const data = await this.repository.getImagesList();

      if (!data) {
        return [];
      }

      const images = data.map(image => Object.values(image));

      return images.flat().sort((firstImage, secondImage) => {
        const firstDateOfPublication: Date = new Date(
          firstImage.publicationDate,
        );
        const secondDateOfPublication: Date = new Date(
          secondImage.publicationDate,
        );
        return (
          secondDateOfPublication.valueOf() - firstDateOfPublication.valueOf()
        );
      });
    } catch (err) {
      toast.error("Sorry we have problem with server !");
    }
  }

  async saveImage(
    userEmail: string,
    imageId: string,
    imageDescription: IImage,
  ) {
    try {
      const document = {
        [imageId]: imageDescription,
      };
      await this.repository.saveImage(userEmail, document);
    } catch (err) {
      toast.error("Sorry we have problem with server !");
    }
  }
}

export const imagesService = new ImagesService(new ImagesRepository());
