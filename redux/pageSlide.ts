import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PageState {
  name: string;
}

const initialState: PageState = {
  name: "",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPageName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setPageName } = pageSlice.actions;

export default pageSlice.reducer;
