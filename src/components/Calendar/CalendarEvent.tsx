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
import axios from "axios";

const CalendarEvent = () => {
  // * Calendar State
  const [show, setShow] = useState(false);
  // * Calendar Redux
  const { events, select } = useSelector((state: RootState) => state.event);
  const dispatch = useDispatch();

  // * Calendar Event
  const onHandleSelectEvent = useCallback((selectInfo: DateSelectArg) => {
    setShow(true);
    dispatch(
      addSelect({
        allDay: selectInfo.allDay,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      })
    );
  }, []);
  const check = useCallback(async () => {
    await axios
      .get(
        "https://electron-memo.herokuapp.com/api/events?filters[user][id][$eq]=2"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    check();
  }, []);
  return (
    <CalendarEventContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "today next",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        slotMinTime="00:00"
        locale="ko"
        height="45rem"
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
