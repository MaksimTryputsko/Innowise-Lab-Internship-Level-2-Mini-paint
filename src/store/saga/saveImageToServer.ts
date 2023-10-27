import { put, takeEvery } from "redux-saga/effects";
import { loadingImages, saveImage } from "store/slices/ImagesCollectionSlice";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";
import { imagesService } from "services/imagesService";

interface IActionSetImageSagaPayload {
  image: string;
  id: string;
  email: string;
  datePublication: string;
}

interface IActionSetImageSaga {
  type: string;
  payload: IActionSetImageSagaPayload;
}

export function* saveImageToServer(action: IActionSetImageSaga): unknown {
  const { id, email } = action.payload;
  yield imagesService.saveImage(IMAGES_COLLECTION, email, id, action.payload);
  yield put(loadingImages(IMAGES_COLLECTION));
}

function* saveImageSaga() {
  yield takeEvery(saveImage.type, saveImageToServer);
}

export { saveImageSaga };
