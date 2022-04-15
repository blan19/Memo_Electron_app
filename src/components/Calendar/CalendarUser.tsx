import { IUser } from "@/types/user.type";
import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { CalendarUserContainer } from "./Calendar.styles";

interface CalendarUserProps {
  user: IUser;
}

interface CalendarUserLinkProps {
  user: IUser;
}

const CalendarUserLink: React.FC<CalendarUserLinkProps> = ({ user }) => {
  return (
    <ul>
      <li>
        <NavLink defaultChecked to={`${user.user.id}`}>
          {user.user.username}
        </NavLink>
      </li>
      <li>
        <NavLink to={`${user.user.id === 1 ? "2" : "1"}`}>
          {user.user.username === "준식이" ? "효식이" : "준식이"}
        </NavLink>
      </li>
    </ul>
  );
};

const CalendarUser: React.FC<CalendarUserProps> = ({ user }) => {
  const calendarUserLink = useMemo(() => <CalendarUserLink user={user} />, []);
  return <CalendarUserContainer>{calendarUserLink}</CalendarUserContainer>;
};

export default CalendarUser;
