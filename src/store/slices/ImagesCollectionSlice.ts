import { createSlice } from "@reduxjs/toolkit";

interface IImages {
  id: string;
  image: string;
  email: string;
}

interface IStateImageCollection {
  isLoading: boolean;
  images: IImages[];
  usersFromDataBase: string[];
}

const initialState: IStateImageCollection = {
  isLoading: true,
  images: [],
  usersFromDataBase: [],
};

const imagesCollectionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingImagesFromTheServer: (state, action) => {
      state.isLoading = true;
    },
    setImageToServer: (state, action) => {
      state.isLoading = true;
    },
    loadingImagesForUserFromTheServer: (state, action) => {
      state.isLoading = true;
    },
    getImages: (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    },
    getUsers: (state, action) => {
      state.usersFromDataBase = action.payload;
    },
  },
});

export const {
  loadingImagesFromTheServer,
  getImages,
  setImageToServer,
  getUsers,
  loadingImagesForUserFromTheServer,
} = imagesCollectionSlice.actions;

export default imagesCollectionSlice.reducer;
