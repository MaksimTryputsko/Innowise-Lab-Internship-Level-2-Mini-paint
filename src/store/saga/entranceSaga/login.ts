import { put, call, takeEvery } from "redux-saga/effects";
import { authService } from "services/authService";
import {
  loadingDataFromTheServerLoginUser,
  setUser,
} from "store/slices/userSlices";

interface IActionEntrySagaPayload {
  email: string;
  password: string;
}

export interface IActionEntrySaga {
  type: string;
  payload: IActionEntrySagaPayload;
}

export function* login(action: IActionEntrySaga): unknown {
  const { email, password } = action.payload;
  const userFromDataBase = yield call(async () =>
    authService.loginUser(email, password),
  );

  if (!userFromDataBase) {
    return;
  }

  yield put(setUser(userFromDataBase));
}

function* loginUserSaga() {
  yield takeEvery(loadingDataFromTheServerLoginUser.type, login);
}

export { loginUserSaga };
