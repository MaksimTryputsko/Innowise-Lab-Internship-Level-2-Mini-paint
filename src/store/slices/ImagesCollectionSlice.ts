import { createSlice } from "@reduxjs/toolkit";
import { IImage } from "constants/interfaces";

interface IStateImageCollection {
  isLoading: boolean;
  images: IImage[];
  users: string[];
}

const initialState: IStateImageCollection = {
  isLoading: true,
  images: [],
  users: [],
};

const imagesCollectionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingImages: state => {
      state.isLoading = true;
    },
    saveImage: (state, action) => {
      state.isLoading = true;
    },
    loadingImagesForUser: (state, action) => {
      state.isLoading = true;
    },
    getImages: (state, action) => {
      state.images = action.payload;
      state.isLoading = false;
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  loadingImages,
  getImages,
  saveImage,
  getUsers,
  loadingImagesForUser,
} = imagesCollectionSlice.actions;

export default imagesCollectionSlice.reducer;
