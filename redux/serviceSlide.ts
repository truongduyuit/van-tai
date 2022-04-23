import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IServiceModel } from "../database";

export interface AppState {
  services: IServiceModel[];
}

const initialState: AppState = {
  services: [],
};

export const appSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<IServiceModel[]>) => {
      state.services = action.payload;
    },
  },
});

export const { setServices } = appSlice.actions;

export default appSlice.reducer;
