import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";
import userReducer from "./userSlice";
import { eventsApi } from "./service/events";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    user: userReducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
