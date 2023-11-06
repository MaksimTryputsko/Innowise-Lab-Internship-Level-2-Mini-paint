import { IImage } from "constants/interfaces";
import { makeAutoObservable, runInAction } from "mobx";
import { imagesService } from "services/imagesService";

class ImagesState {
  images: IImage[] = [];
  users: string[] = [];
  userImages: IImage[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async loadingImages() {
    const result = await imagesService.getImagesCollection();
    if (!result) {
      return;
    }
    runInAction(() => {
      this.images = result;
      this.users = Array.from(new Set(result.map(image => image.email)));
    });
  }

  async saveImage(image: IImage) {
    const { id, email } = image;
    await imagesService.saveImage(id, email, image);
    this.images = [image, ...this.images];
  }

  getUserImages(email: string) {
    this.userImages = this.images.filter(image => image.email === email);
  }
}

export default new ImagesState();
