import createSagaMiddleware from "redux-saga";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import { loginUserSaga } from "./saga/entranceSaga/loginSaga";
import { fork } from "redux-saga/effects";
import { registrationSagaUser } from "./saga/entranceSaga/registrationSaga";
import canvasReducer from "./slices/canvasSlice";
import imagesCollectionReducer from "./slices/ImagesCollectionSlice";
import { imagesCollectionSaga } from "./saga/getImagesCollectionSaga";
import { setImageSaga } from "./saga/setImageToServerSaga";
import { userValueImagesSaga } from "./saga/getUsersImagesSaga";

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
  yield fork(setImageSaga);
  yield fork(userValueImagesSaga);
}

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
