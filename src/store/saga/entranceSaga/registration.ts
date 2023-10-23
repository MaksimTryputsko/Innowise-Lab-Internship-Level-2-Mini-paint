import { put, call, takeEvery } from "redux-saga/effects";
import {
  loadingDataFromTheServerRegistrationUser,
  setUser,
} from "store/slices/userSlices";
import { IActionEntrySaga } from "./login";
import { authService } from "services/authService";

export function* registration(action: IActionEntrySaga): unknown {
  const { email, password } = action.payload;
  const user = yield call(async () =>
    authService.registrationUser(email, password),
  );
  if (!user) {
    return;
  }
  yield put(setUser(user));
}

function* registrationSagaUser() {
  yield takeEvery(loadingDataFromTheServerRegistrationUser.type, registration);
}

export { registrationSagaUser };
