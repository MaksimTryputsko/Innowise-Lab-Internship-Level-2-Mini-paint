import { put, takeEvery } from "redux-saga/effects";
import {
  loadingImagesFromTheServer,
  setImageToServer,
} from "store/slices/ImagesCollectionSlice";
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
  yield put(loadingImagesFromTheServer(IMAGES_COLLECTION));
}

function* setImageSaga() {
  yield takeEvery(setImageToServer.type, saveImageToServer);
}

export { setImageSaga };
