import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingDataFromTheServerRegistrationUser,
  setUser,
} from "store/slices/userSlices";
import { IActionEntrySaga } from "./login";
import { authService } from "services/authService";

export function* registration(action: IActionEntrySaga): unknown {
  const { email, password } = action.payload;
  const userFromDataBase = yield call(async () =>
    authService.registrationUser(email, password),
  );
  if (!userFromDataBase) {
    return;
  }
  yield put(setUser(userFromDataBase));
}

function* registrationSagaUser() {
  yield takeEvery(loadingDataFromTheServerRegistrationUser.type, registration);
}

export { registrationSagaUser };
