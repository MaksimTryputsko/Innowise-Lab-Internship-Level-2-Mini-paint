import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingDataFromTheServerRegistrationUser: (state, action) => {
      state.isLoading = true;
    },
    loadingDataFromTheServerLoginUser: (state, action) => {
      state.isLoading = true;
    },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isLoading = false;
    },
    removeUser: state => {
      state.email = null;
      state.id = null;
    },
  },
});

export const {
  setUser,
  removeUser,
  loadingDataFromTheServerRegistrationUser,
  loadingDataFromTheServerLoginUser,
} = userSlice.actions;

export default userSlice.reducer;
