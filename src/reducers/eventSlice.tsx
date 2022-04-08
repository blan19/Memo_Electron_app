import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventInput } from "@fullcalendar/react";

const initialState: EventInput[] = [
  {
    id: "123124124",
    title: "Test-1",
  },
  {
    id: "wfmkm12m312",
    title: "Test-2",
  },
];

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
