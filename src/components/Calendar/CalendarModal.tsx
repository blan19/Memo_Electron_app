import { SelectType } from "@/types/events.type";
import React, { Dispatch, FunctionComponent, useCallback } from "react";
import { CalendarModalError, CalendarModalForm } from "./Calendar.styles";
import { Controller, useForm } from "react-hook-form";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import { ErrorMessage } from "@hookform/error-message";
import { addEvents } from "@/reducers/eventSlice";
import { uid } from "uid";
import dayjs from "dayjs";
import { addEvent } from "@/lib/api/events";
import { api_base_url, api_events_url } from "@/constant/constant";
import { UserType } from "@/reducers/userSlice";

interface FormProps {
  title: string;
  allDay: "true" | "false";
  time: any;
}

interface CalendarModalProps {
  select: SelectType;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: Dispatch<any>;
  user: UserType;
  refetch: () => void;
}

const allDayObj = {
  true: true,
  false: false,
};

const CalendarModal: FunctionComponent<CalendarModalProps> = ({
  select,
  setShow,
  dispatch,
  user,
  refetch,
}) => {
  const {
    register,
    reset,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormProps>({
    defaultValues: {
      allDay: "true",
    },
  });
  const allDay = watch("allDay");
  const onSubmit = useCallback((data: FormProps) => {
    const { title, time, allDay } = data;
    addEvent(
      `${api_base_url}${api_events_url}`,
      allDayObj[allDay]
        ? {
            title,
            start: select.start,
            user: user.user.id,
          }
        : {
            title,
            start: select.start + `T${dayjs(time._d).format("HH")}:00:00`,
            user: user.user.id,
          }
    );
    refetch();
    reset();
    setShow(false);
  }, []);
  return (
    <CalendarModalForm onSubmit={handleSubmit(onSubmit)}>
      <div className="calendar-form-title">
        <h1>Schedule</h1>
        <p>{select.start}</p>
      </div>
      <div className="calendar-form-contents">
        <div>
          <span>Title</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="일정"
            {...register("title", { required: "타이틀을 입력해주세요" })}
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="title"
          render={({ message }) => (
            <CalendarModalError>
              <p>{message}</p>
            </CalendarModalError>
          )}
        />
        <div>
          <span>All Day</span>
        </div>
        <div>
          <label
            className={allDayObj[allDay] ? "radio-checked" : null}
            htmlFor="yes"
          >
            Yes
          </label>
          <input
            id="yes"
            type="radio"
            value="true"
            defaultChecked
            {...register("allDay", { required: "체크가 필요합니다." })}
          />
          <label
            className={allDayObj[allDay] ? null : "radio-checked"}
            htmlFor="no"
          >
            No
          </label>
          <input
            id="no"
            type="radio"
            value="false"
            {...register("allDay", { required: "체크가 필요합니다." })}
          />
        </div>
        {!allDayObj[allDay] && (
          <>
            <div>
              <span>Time</span>
            </div>
            <div>
              <Controller
                name="time"
                control={control}
                rules={{
                  required: allDayObj[allDay] ? false : "시간을 선택해주세요",
                }}
                render={({ field }) => (
                  <TimePicker
                    format="HH시"
                    showSecond={false}
                    placeholder="시간을 선택해주세요"
                    {...field}
                  />
                )}
              />
            </div>
            <ErrorMessage
              errors={errors}
              name="time"
              render={({ message }) => (
                <CalendarModalError>
                  <p>{message}</p>
                </CalendarModalError>
              )}
            />
          </>
        )}
      </div>
      <div className="calednar-form-divider"></div>
      <div className="calendar-form-button">
        <button className="calendar-form-button-register" type="submit">
          등록
        </button>
        <button
          className="calendar-form-button-cancle"
          type="button"
          onClick={() => setShow(false)}
        >
          취소
        </button>
      </div>
    </CalendarModalForm>
  );
};

export default CalendarModal;
