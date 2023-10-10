import { put, takeEvery } from "redux-saga/effects";
import { dataBase } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  loadingImagesFromTheServer,
  setImageToServer,
} from "store/slices/ImagesCollectionSlice";
import { IMAGES_COLLECTION } from "constants/nameOfCollection";

interface IActionSetImageSagaPayload {
  imgURL: string;
  id: string;
  email: string;
  datePublication: string;
}

interface IActionSetImageSaga {
  type: string;
  payload: IActionSetImageSagaPayload;
}

export function* setImageToServerSaga(action: IActionSetImageSaga): unknown {
  const { imgURL, id, email, datePublication } = action.payload;
  const imageForServer = { image: imgURL, id, email, datePublication };
  try {
    yield setDoc(
      doc(dataBase, IMAGES_COLLECTION, email),
      {
        [id]: imageForServer,
      },
      { merge: true },
    );
    yield put(loadingImagesFromTheServer(IMAGES_COLLECTION));
  } catch (err) {
    console.log(err);
  }
}

function* setImageSaga() {
  yield takeEvery(setImageToServer.type, setImageToServerSaga);
}

export { setImageSaga };
