import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorType } from "../contants/enum";

export interface AppState {
  errorType: ErrorType | null;
  loading?: boolean;
  modalOpened?: boolean;
}

const initialState: AppState = {
  errorType: null,
  loading: false,
  modalOpened: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorType | null>) => {
      state.errorType = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setOpenModal: (state, action: PayloadAction<boolean | undefined>) => {
      state.modalOpened = action.payload;
    },
  },
});

export const { setError, setOpenModal, setLoading } = appSlice.actions;

export default appSlice.reducer;
