import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingImagesFromTheServer,
  getImages,
  getUsers,
} from "store/slices/ImagesCollectionSlice";
import { convertDataToArray } from "functions/convertDataToArray";
import { filterAllUsersFromServer } from "functions/filterAllUsersFromServer";
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

  yield put(getUsers(filterAllUsersFromServer(getImagesCollection)));
  yield put(getImages(convertDataToArray(getImagesCollection)));
}

function* imagesCollectionSaga() {
  yield takeEvery(loadingImagesFromTheServer.type, getImagesCollection);
}

export { imagesCollectionSaga };
