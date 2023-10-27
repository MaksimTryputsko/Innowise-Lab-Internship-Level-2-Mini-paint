import { createSlice } from "@reduxjs/toolkit";

interface IImages {
  id: string;
  image: string;
  email: string;
}

interface IStateImageCollection {
  isLoading: boolean;
  images: IImages[];
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
    loadingImages: (state, action) => {
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
