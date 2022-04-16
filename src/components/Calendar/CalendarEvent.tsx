import React, { useCallback, useEffect, useState } from "react";
import FullCalendar, {
  DateSelectArg,
  EventClickArg,
} from "@fullcalendar/react";
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
import CalendarDelete from "./CalendarDelete";
import { updateEvent } from "@/lib/api/events";
import { api_base_url, api_events_url } from "@/constant/constant";

interface CalendarEventProps {
  select: SelectType;
  user: UserType;
}

const CalendarEvent: React.FC<CalendarEventProps> = ({ select, user }) => {
  const params = useParams();
  // * Calendar State
  const [target, setTarget] = useState("");
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
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

  // * Calendar Control
  const CalendarControl = useCallback(
    () => (Number(params.id) === user.user.id ? true : false),
    [user, params]
  );
  const onDelete = useCallback(
    (id: string) => {
      if (Number(params.id) === user.user.id) {
        setVisible(true);
        setTarget(id);
      } else {
        return;
      }
    },
    [params, user]
  );
  return (
    <CalendarEventContainer Mine={CalendarControl()}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "today next",
        }}
        editable={CalendarControl()}
        selectable={CalendarControl()}
        selectMirror={CalendarControl()}
        dayMaxEvents={true}
        slotMinTime="00:00"
        locale="ko"
        height="45rem"
        initialView="dayGridMonth"
        events={events}
        // * event
        select={onHandleSelectEvent}
        eventClick={(arg: EventClickArg) => onDelete(arg.event.id)}
        eventDrop={(arg) =>
          updateEvent(
            `${api_base_url}${api_events_url}/${arg.event.id}`,
            arg.event.startStr,
            arg.event.endStr
          ).then(() => refetch())
        }
        eventResize={(arg) =>
          updateEvent(
            `${api_base_url}${api_events_url}/${arg.event.id}`,
            arg.event.startStr,
            arg.event.endStr
          ).then(() => refetch())
        }
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
      <Modal show={visible} setShow={setVisible}>
        <CalendarDelete
          setShow={setVisible}
          target={target}
          setTarget={setTarget}
          refetch={refetch}
        />
      </Modal>
    </CalendarEventContainer>
  );
};

export default CalendarEvent;
