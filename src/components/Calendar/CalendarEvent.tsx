import React, { useCallback, useEffect, useState } from "react";
import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import CalendarModal from "./CalendarModal";
import Modal from "../Modal";
import { CalendarEventContainer } from "./Calendar.styles";
import { addSelect } from "@/reducers/eventSlice";

const CalendarEvent = () => {
  // * Calendar State
  const [show, setShow] = useState(false);
  // * Calendar Redux
  const { events, select } = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();

  // * Calendar Event
  const onHandleSelectEvent = useCallback((selectInfo: DateSelectArg) => {
    setShow(true);
    console.log(selectInfo);
    dispatch(
      addSelect({
        allDay: selectInfo.allDay,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      })
    );
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <CalendarEventContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        slotMinTime="00:00"
        locale="ko"
        height="60rem"
        initialView="dayGridMonth"
        events={events}
        // * event
        select={onHandleSelectEvent}
        eventDrop={(arg) => console.log(arg)}
        eventResize={(arg) => console.log(arg)}
      />
      <Modal show={show} setShow={setShow}>
        <CalendarModal dispatch={dispatch} setShow={setShow} select={select} />
      </Modal>
    </CalendarEventContainer>
  );
};

export default CalendarEvent;
