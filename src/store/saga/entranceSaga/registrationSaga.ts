import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingDataFromTheServerRegistrationUser,
  setUser,
} from "store/slices/userSlices";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IActionEntrySaga } from "./loginSaga";
import { errorProcessingRegistration } from "functions/errorProcessing/errorProcessingRegistration";

export function* registrationSaga(action: IActionEntrySaga): unknown {
  const { email, password } = action.payload;
  const auth = getAuth();

  try {
    const registrationUser = yield call(async () => {
      const userFromServer = await createUserWithEmailAndPassword(
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
    yield put(setUser(registrationUser));
  } catch (err) {
    errorProcessingRegistration((err as Error).message);
  }
}

function* registrationSagaUser() {
  yield takeEvery(
    loadingDataFromTheServerRegistrationUser.type,
    registrationSaga,
  );
}

export { registrationSagaUser };
