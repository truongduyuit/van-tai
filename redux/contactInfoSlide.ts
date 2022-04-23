import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContactInfoModel } from "../database";

export interface AppState {
  contactInfo: IContactInfoModel | undefined;
}

const initialState: AppState = {
  contactInfo: undefined,
};

export const appSlice = createSlice({
  name: "contactInfo",
  initialState,
  reducers: {
    setContactInfo: (state, action: PayloadAction<IContactInfoModel>) => {
      state.contactInfo = action.payload;
    },
  },
});

export const { setContactInfo } = appSlice.actions;

export default appSlice.reducer;
