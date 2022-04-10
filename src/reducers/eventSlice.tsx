import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventInput } from "@fullcalendar/react";
import { SelectType } from "@/types/events.type";

interface EventType {
  events: EventInput[];
  select: SelectType | null;
}

const initialState: EventType = {
  events: [],
  select: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addSelect: (state, action: PayloadAction<SelectType>) => {
      const { allDay, start, end } = action.payload;
      state.select = { allDay, start, end };
    },
    resetSelect: (state) => (state.select = null),
    addEvents: (state, action: PayloadAction<EventInput>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addSelect, resetSelect, addEvents } = eventSlice.actions;

export default eventSlice.reducer;
