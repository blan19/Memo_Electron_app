import React from "react";
import styled from "styled-components";

const CalendarSchedule = () => {
  return (
    <CalendarScheduleContainer>
      <div className="schedule-title">
        <h1>Today's schedule</h1>
        <p>{String(new Date())}</p>
      </div>
    </CalendarScheduleContainer>
  );
};

export default CalendarSchedule;

const CalendarScheduleContainer = styled.section`
  flex: 1;
  padding: 0 15px;
  margin-top: 5px;
  /* schedule - title */
  .schedule-title {
    h1 {
      font-size: 20px;
      color: #495057;
    }
    p {
      font-size: 15px;
      color: #adb5bd;
    }
  }
`;
