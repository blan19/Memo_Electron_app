import { api_base_url, api_events_url } from "@/constant/constant";
import { deleteEvent } from "@/lib/api/events";
import React, { FormEvent, useCallback } from "react";
import { CalendarDeleteContainer } from "./Calendar.styles";

interface CalendarDeleteProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTarget: React.Dispatch<React.SetStateAction<string>>;
  target: string;
  refetch: () => void;
}

const CalendarDelete: React.FC<CalendarDeleteProps> = ({
  setShow,
  setTarget,
  target,
  refetch,
}) => {
  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    deleteEvent(`${api_base_url}${api_events_url}/${target}`).then(() =>
      refetch()
    );
    setTarget("");
    setShow(false);
  }, []);
  return (
    <CalendarDeleteContainer onSubmit={onSubmit}>
      <div className="calendar-delete-title">
        <h1>일정을 삭제하시겠습니까?</h1>
      </div>
      <div className="form-divider"></div>
      <div className="form-button">
        <button className="form-button-register" type="submit">
          삭제
        </button>
        <button
          className="form-button-cancle"
          type="button"
          onClick={() => setShow(false)}
        >
          취소
        </button>
      </div>
    </CalendarDeleteContainer>
  );
};

export default CalendarDelete;
