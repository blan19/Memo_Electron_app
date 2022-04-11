import { CalendarSchedule, CalendarEvent } from "@/components/Calendar";
import React from "react";
import styled from "styled-components";

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarSchedule />
      <CalendarEvent />
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.main`
  flex: 1;
  display: flex;
`;
