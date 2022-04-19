import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appReducer from "./appSlide";
import pageReducer from "./pageSlide";

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      page: pageReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
