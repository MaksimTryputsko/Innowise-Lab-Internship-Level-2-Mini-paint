import { put, call, takeEvery } from "redux-saga/effects";
import {
  getImages,
  loadingImagesForUserFromTheServer,
} from "store/slices/ImagesCollectionSlice";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";
import { convertDataWithUserToUserImgArray } from "functions/convertDataWithUserToUserImgArray";
import toast from "react-hot-toast";

export interface IActionGetUsersImagesSaga {
  type: string;
  payload: string;
}

export function* getUsersImagesSaga(
  action: IActionGetUsersImagesSaga,
): unknown {
  const imagesCollectionRef = collection(dataBase, IMAGES_COLLECTION);
  try {
    const getImagesCollection = yield call(async () => {
      const data = await getDocs(imagesCollectionRef);
      const filterData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filterData;
    });

    yield put(
      getImages(
        convertDataWithUserToUserImgArray(getImagesCollection, action.payload),
      ),
    );
  } catch (err) {
    toast.error("Sorry we have problem with server !");
  }
}

function* userValueImagesSaga() {
  yield takeEvery(loadingImagesForUserFromTheServer.type, getUsersImagesSaga);
}

export { userValueImagesSaga };
