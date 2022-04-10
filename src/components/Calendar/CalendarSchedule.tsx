import React from "react";
import { CalendarScheduleContainer } from "./Calendar.styles";
import dayjs from "dayjs";

const CalendarSchedule = () => {
  return (
    <CalendarScheduleContainer>
      <div className="schedule-title">
        <h1>Today's schedule</h1>
        <p>{dayjs(new Date()).format("YYYY년 MM월 DD일")}</p>
      </div>
    </CalendarScheduleContainer>
  );
};

export default CalendarSchedule;
