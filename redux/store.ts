import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appReducer from "./appSlide";
import pageReducer from "./pageSlide";
import serviceReducer from "./serviceSlide";
import contactInfoReducer from "./contactInfoSlide";

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      page: pageReducer,
      service: serviceReducer,
      contactInfo: contactInfoReducer,
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
