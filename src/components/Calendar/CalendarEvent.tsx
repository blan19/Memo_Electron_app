import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "reducers";

const CalendarEvent = () => {
  const event = useSelector((state: RootState) => state.event);
  const [show, setShow] = useState(false);
  return (
    <CalendarEventContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        locale="ko"
        initialView="dayGridMonth"
        initialEvents={event}
      />
    </CalendarEventContainer>
  );
};

export default CalendarEvent;

const CalendarEventContainer = styled.section`
  width: 55rem;
  padding: 0 15px;
  margin-top: 5px;

  /* calendar-root */
  .fc {
    width: 100%;
  }

  /* calendar-title */
  .fc-toolbar-title {
    font-size: 20px !important;
    color: #495057 !important;
  }

  /* calendar-daygrid */
  .fc-daygrid {
    margin-top: 10px;
  }
`;
