import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user?: { [key: string]: unknown };
}
const initState = {
  isInitialized: false,
  isAuthenticated: false,
  user: undefined,
};

const authStore = createSlice({
  initialState: initState,
  name: "auth",
  reducers: {
    initialize: (state) => {
      return { ...state };
    },
    login: (state) => {
      return { ...state, isAuthenticated: true };
    },
    logout: (state) => {
      return { ...state, isAuthenticated: false };
    },
  },
});

export const { initialize, login, logout } = authStore.actions;

export default authStore.reducer;
