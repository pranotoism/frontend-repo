import { createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  token: string;
  data: any;
  loading: boolean;
  error: any;
}

const initialState: IUserState = {
  token: '',
  data: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    fetchUserDataRequest(state) {
      state.loading = true;
    },
    fetchUserDataSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserDataRequest(state) {
      state.loading = true;
    },
    updateUserDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    updateUserDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setToken,
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  updateUserDataRequest,
  updateUserDataSuccess,
  updateUserDataFailure,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
