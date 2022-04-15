import {
  CalendarSchedule,
  CalendarEvent,
  CalendarUser,
} from "@/components/Calendar";
import { RootState } from "@/reducers/index";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

const Calendar = () => {
  const {
    user,
    event: { events, select },
  } = useSelector((state: RootState) => state);
  return (
    <CalendarContainer>
      <CalendarUser user={user} />
      <Routes>
        <Route index element={<Navigate replace to={`${user.user.id}`} />} />
        <Route
          path=":id"
          element={
            <CalendarEvent user={user} events={events} select={select} />
          }
        />
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
