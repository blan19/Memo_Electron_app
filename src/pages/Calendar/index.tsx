import { CalendarSchedule, CalendarEvent } from "@/components/Calendar";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const Calendar = () => {
  return (
    <CalendarContainer>
      <ul>
        <li>
          <NavLink to="1">me</NavLink>
        </li>
        <li></li>
      </ul>
      <Routes>
        <Route path=":id" element={<CalendarEvent />} />
      </Routes>
      <CalendarSchedule />
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 15px;
`;
