import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingImagesFromTheServer,
  getImages,
  getUsers,
} from "store/slices/ImagesCollectionSlice";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase";
import { convertDataToArray } from "functions/convertDataToArray";
import { filterAllUsersFromServer } from "functions/filterAllUsersFromServer";
import toast from "react-hot-toast";

export interface IActionGetImagesCollectionSaga {
  type: string;
  payload: string;
}

export function* getImagesCollectionSaga(
  action: IActionGetImagesCollectionSaga,
): unknown {
  const imagesCollectionRef = collection(dataBase, action.payload);
  try {
    const getImagesCollection = yield call(async () => {
      const data = await getDocs(imagesCollectionRef);
      const filterData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filterData;
    });

    yield put(getUsers(filterAllUsersFromServer(getImagesCollection)));
    yield put(getImages(convertDataToArray(getImagesCollection)));
  } catch (err) {
    toast.error("Sorry we have problem with server !");
  }
}

function* imagesCollectionSaga() {
  yield takeEvery(loadingImagesFromTheServer.type, getImagesCollectionSaga);
}

export { imagesCollectionSaga };
