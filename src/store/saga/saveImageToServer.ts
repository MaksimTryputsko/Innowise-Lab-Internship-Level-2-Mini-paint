import { put, takeEvery } from "redux-saga/effects";
import { loadingImages, saveImage } from "store/slices/ImagesCollectionSlice";
import { imagesService } from "services/imagesService";

interface IActionSetImageSagaPayload {
  image: string;
  id: string;
  email: string;
  publicationDate: string;
}

interface IActionSetImageSaga {
  type: string;
  payload: IActionSetImageSagaPayload;
}

export function* saveImageToServer(action: IActionSetImageSaga): unknown {
  const { id, email } = action.payload;
  yield imagesService.saveImage(email, id, action.payload);
  yield put(loadingImages());
}

function* saveImageSaga() {
  yield takeEvery(saveImage.type, saveImageToServer);
}

export { saveImageSaga };
