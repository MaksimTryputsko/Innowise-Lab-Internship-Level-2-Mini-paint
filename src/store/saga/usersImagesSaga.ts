import { put, call, takeEvery } from "redux-saga/effects";
import {
  getImages,
  loadingImagesForUser,
} from "store/slices/ImagesCollectionSlice";
import { imagesService } from "services/imagesService";
import { IImage } from "constants/interfaces";

export interface IActionGetUsersImagesSaga {
  type: string;
  payload: string;
}

export function* usersImagesSaga(action: IActionGetUsersImagesSaga): unknown {
  const getImagesCollection = yield call(async () =>
    imagesService.getImagesCollection(),
  );
  if (!getImagesCollection) {
    return;
  }

  const userImages = getImagesCollection.filter(
    (image: IImage) => image.email === action.payload,
  );

  yield put(getImages(userImages));
}

function* userValueImagesSaga() {
  yield takeEvery(loadingImagesForUser.type, usersImagesSaga);
}

export { userValueImagesSaga };
