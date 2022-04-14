import React, { useCallback } from "react";
import { CalendarScheduleContainer } from "./Calendar.styles";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { logout } from "@/lib/api/auth";
import { useDispatch } from "react-redux";
import { resetUser } from "@/reducers/userSlice";

const CalendarSchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = useCallback(() => {
    logout();
    dispatch(resetUser());
    navigate("/login");
  }, []);
  return (
    <CalendarScheduleContainer>
      <div className="schedule-title">
        <h1>Today's schedule</h1>
        <p>{dayjs(new Date()).format("YYYY년 MM월 DD일")}</p>
        <p onClick={() => navigate("/login")}>login</p>
        <p onClick={onLogout}>logout</p>
      </div>
    </CalendarScheduleContainer>
  );
};

export default CalendarSchedule;
