import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import { loginUserSaga } from "./saga/entranceSaga/login";
import { fork } from "redux-saga/effects";
import { registrationSagaUser } from "./saga/entranceSaga/registration";
import canvasReducer from "./slices/canvasSlice";
import imagesCollectionReducer from "./slices/ImagesCollectionSlice";
import { imagesCollectionSaga } from "./saga/imagesCollection";
import { saveImageSaga } from "./saga/saveImageToServer";
import { userValueImagesSaga } from "./saga/usersImagesSaga";

const rootReducer = combineReducers({
  user: userReducer,
  canvas: canvasReducer,
  imagesCollection: imagesCollectionReducer,
});

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

function* rootSaga() {
  yield fork(loginUserSaga);
  yield fork(registrationSagaUser);
  yield fork(imagesCollectionSaga);
  yield fork(saveImageSaga);
  yield fork(userValueImagesSaga);
}

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
