import React, { useCallback, useEffect, useState } from "react";
import FullCalendar, { DateSelectArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch } from "react-redux";
import CalendarModal from "./CalendarModal";
import Modal from "../Modal";
import { CalendarEventContainer } from "./Calendar.styles";
import { addSelect } from "@/reducers/eventSlice";
import { SelectType } from "@/types/events.type";
import { UserType } from "@/reducers/userSlice";
import { useParams } from "react-router-dom";
import { useGetEventsByIdQuery } from "@/reducers/service/events";

interface CalendarEventProps {
  select: SelectType;
  user: UserType;
}

const CalendarEvent: React.FC<CalendarEventProps> = ({ select, user }) => {
  const params = useParams();
  // * Calendar State
  const [show, setShow] = useState(false);
  // * Calendar Redux
  const { events, refetch } = useGetEventsByIdQuery(params.id, {
    selectFromResult: ({ data }) => ({
      events: data?.data.map((event) => ({
        ...event.attributes,
        id: String(event.id),
      })),
    }),
  });
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
  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <CalendarEventContainer
      Mine={Number(params.id) === user.user.id ? true : false}
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "today next",
        }}
        editable={Number(params.id) === user.user.id ? true : false}
        selectable={Number(params.id) === user.user.id ? true : false}
        selectMirror={Number(params.id) === user.user.id ? true : false}
        dayMaxEvents={true}
        slotMinTime="00:00"
        locale="ko"
        height="45rem"
        initialView="dayGridMonth"
        events={events}
        // * event
        select={onHandleSelectEvent}
        eventClick={(arg) => console.log(arg)}
        eventDrop={(arg) => console.log(arg)}
        eventResize={(arg) => console.log(arg)}
      />
      <Modal show={show} setShow={setShow}>
        <CalendarModal
          dispatch={dispatch}
          setShow={setShow}
          select={select}
          user={user}
          refetch={refetch}
        />
      </Modal>
    </CalendarEventContainer>
  );
};

export default CalendarEvent;
