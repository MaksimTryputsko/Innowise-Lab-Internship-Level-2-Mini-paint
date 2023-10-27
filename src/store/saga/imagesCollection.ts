import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingImages,
  getImages,
  getUsers,
} from "store/slices/ImagesCollectionSlice";
import { setUsersList } from "functions/setUsersList";
import { imagesService } from "services/imagesService";

export interface IActionGetImagesCollectionSaga {
  type: string;
  payload: string;
}

export function* imagesCollection(
  action: IActionGetImagesCollectionSaga,
): unknown {
  const getImagesCollection = yield call(async () =>
    imagesService.getImagesCollection(action.payload),
  );

  if (!getImagesCollection.length) {
    return;
  }

  yield put(getUsers(setUsersList(getImagesCollection)));
  yield put(getImages(getImagesCollection));
}

function* imagesCollectionSaga() {
  yield takeEvery(loadingImages.type, imagesCollection);
}

export { imagesCollectionSaga };
