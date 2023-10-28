import { put, call, takeEvery } from "redux-saga/effects";
import {
  getImages,
  loadingImagesForUser,
} from "store/slices/ImagesCollectionSlice";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";
import { filterImagesForUser } from "functions/filterImagesForUser";
import { imagesService } from "services/imagesService";

export interface IActionGetUsersImagesSaga {
  type: string;
  payload: string;
}

export function* usersImagesSaga(action: IActionGetUsersImagesSaga): unknown {
  const getImagesCollection = yield call(async () =>
    imagesService.getImagesCollection(IMAGES_COLLECTION),
  );
  if (!getImagesCollection) {
    return;
  }
  yield put(
    getImages(filterImagesForUser(getImagesCollection, action.payload)),
  );
}

function* userValueImagesSaga() {
  yield takeEvery(loadingImagesForUser.type, usersImagesSaga);
}

export { userValueImagesSaga };