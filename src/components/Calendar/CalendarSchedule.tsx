import React, { useEffect } from "react";
import { CalendarScheduleContainer } from "./Calendar.styles";
import dayjs from "dayjs";
import CalendarScheduleEvents from "./CalendarScheduleEvents";
import { useGetEventsByIdQuery } from "@/reducers/service/events";
import { useParams } from "react-router-dom";
import { UserType } from "@/reducers/userSlice";

interface CalendarScheduleProps {
  user: UserType;
}

const CalendarScheduleNoContents = () => {
  return (
    <div>
      <h1>asd</h1>
    </div>
  );
};

const CalendarSchedule: React.FC<CalendarScheduleProps> = ({ user }) => {
  const params = useParams();
  const { events, refetch } = useGetEventsByIdQuery(`${user.user.id}`, {
    selectFromResult: ({ data }) => ({
      events: data?.data
        .map((event) => ({
          ...event.attributes,
          id: String(event.id),
        }))
        .filter((event) =>
          event.start.includes(dayjs(new Date()).format("YYYY-MM-DD"))
        ),
    }),
  });

  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <CalendarScheduleContainer>
      <div className="schedule-title">
        <h1>Today's schedule</h1>
        <p>{dayjs(new Date()).format("YYYY년 MM월 DD일")}</p>
      </div>
      {events && events.length > 0 ? (
        <CalendarScheduleEvents events={events} refetch={refetch} />
      ) : (
        <CalendarScheduleNoContents />
      )}
    </CalendarScheduleContainer>
  );
};

export default CalendarSchedule;
