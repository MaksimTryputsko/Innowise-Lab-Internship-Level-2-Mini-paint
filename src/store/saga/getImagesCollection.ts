import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingImagesFromTheServer,
  getImages,
  getUsers,
} from "store/slices/ImagesCollectionSlice";
import { sortImages } from "functions/sortImages";
import { setUsersListFromDataBase } from "functions/setUsersListFromDataBase";
import { imagesService } from "services/imagesService";

export interface IActionGetImagesCollectionSaga {
  type: string;
  payload: string;
}

export function* getImagesCollection(
  action: IActionGetImagesCollectionSaga,
): unknown {
  const getImagesCollection = yield call(async () =>
    imagesService.getImagesCollection(action.payload),
  );
  if (!getImagesCollection) {
    return;
  }

  yield put(getUsers(setUsersListFromDataBase(getImagesCollection)));
  yield put(getImages(sortImages(getImagesCollection)));
}

function* imagesCollectionSaga() {
  yield takeEvery(loadingImagesFromTheServer.type, getImagesCollection);
}

export { imagesCollectionSaga };
