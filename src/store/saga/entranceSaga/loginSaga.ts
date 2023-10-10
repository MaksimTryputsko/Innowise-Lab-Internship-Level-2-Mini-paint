import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingDataFromTheServerLoginUser,
  setUser,
} from "store/slices/userSlices";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface IActionEntrySagaPayload {
  email: string;
  password: string;
}
export interface IActionEntrySaga {
  type: string;
  payload: IActionEntrySagaPayload;
}

export function* loginSaga(action: IActionEntrySaga): unknown {
  const { email, password } = action.payload;
  const auth = getAuth();
  try {
    const loginUser = yield call(async () => {
      const userFromServer = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userData = {
        email: userFromServer.user.email,
        id: userFromServer.user.uid,
      };
      return userData;
    });
    yield put(setUser(loginUser));
  } catch (err) {
    if ((err as Error).message === "Firebase: Error (auth/invalid-email).") {
      return alert("Your email is invalid, pease write correct e-mail !");
    }
    if (
      (err as Error).message ===
      "Firebase: Error (auth/invalid-login-credentials)."
    ) {
      return alert("Please write correct data !");
    }
    return alert("Please, try later");
  }
}

function* loginUserSaga() {
  yield takeEvery(loadingDataFromTheServerLoginUser.type, loginSaga);
}

export { loginUserSaga };
