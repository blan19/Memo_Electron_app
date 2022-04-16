import { AiOutlineClockCircle } from "@/lib/styles/common";
import { IEvents } from "@/types/events.type";
import React, { useMemo } from "react";
import { CalendarScheduleEventsContainer } from "./Calendar.styles";

interface CalendarScheduleEventsProps {
  events: IEvents[];
  refetch: () => void;
}

interface CalendarScheduleEventsItemProps {
  event: IEvents;
}

const CalendarScheduleEventsItem: React.FC<CalendarScheduleEventsItemProps> = ({
  event,
}) => {
  return (
    <li>
      <div className="today-title">
        <h1>{event.title}</h1>
      </div>
      <div className="today-time">
        <div className="today-time-icon">
          <AiOutlineClockCircle />
        </div>
        <div className="today-time-content">
          <h1>{event.id}</h1>
        </div>
      </div>
    </li>
  );
};

const CalendarScheduleEvents: React.FC<CalendarScheduleEventsProps> = ({
  events,
}) => {
  const memorizedEvents = useMemo(
    () =>
      events.map((event) => (
        <CalendarScheduleEventsItem event={event} key={event.id} />
      )),
    [events]
  );
  return (
    <CalendarScheduleEventsContainer>
      {memorizedEvents}
    </CalendarScheduleEventsContainer>
  );
};

export default CalendarScheduleEvents;
