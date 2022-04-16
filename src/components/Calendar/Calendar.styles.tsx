import {
  Button,
  flexBetween,
  flexCenter,
  flexColCenter,
  flexEvenly,
} from "@/lib/styles/common";
import styled from "styled-components";

// * Calendar Event

const CalendarEventContainer = styled.section<{ Mine: boolean }>`
  width: 100%;
  margin-top: 5px;

  /* calendar-root */
  .fc {
    width: 100%;
  }
  .fc table {
    font-size: 1rem;
  }

  /* calendar-title */
  .fc .fc-toolbar-title {
    font-size: var(--font-title-1);
    color: var(--color-mainColor) !important;
    margin-left: 5.85rem;
  }

  /* calendar-daygrid */
  .fc-daygrid {
    margin-top: 10px;
  }

  .fc .fc-view-harness {
    background-color: var(--color-subBgColor);
    border-radius: 0.5rem;
  }

  /* calendar-daygrid-day */
  .fc-daygrid-day {
    cursor: ${(props) => (props.Mine ? "pointer" : null)};
  }

  th {
    color: var(--color-mainColor);
  }

  .fc-col-header {
    margin-bottom: 1rem;
  }

  .fc-col-header-cell-cushion {
    font-size: 1.25rem;
  }

  .fc-day-sun {
    a {
      color: #f03e3e !important;
    }
  }
  a.fc-event {
    ${flexCenter}
    font-size: 1rem;
    .fc-event-time {
    }
    .fc-event-title {
    }
  }

  /* calendar-toolbar-button */
  .fc .fc-button {
    font-size: 1.25rem;
    transition: background-color 0.4s ease;
    border-radius: 0.5rem;
    &:hover {
      background-color: #364fc7;
      border-color: #364fc7;
    }
  }
  .fc .fc-button-primary {
    background-color: var(--color-mainColor);
    border-color: var(--color-mainColor);
  }
  .fc .fc-button-primary:disabled {
    background-color: var(--color-subBgColor);
    border-color: var(--color-subBgColor);
    color: var(--color-primaryText);
    font-weight: 500;
  }
  .fc .fc-button:disabled {
    opacity: 1;
    cursor: not-allowed;
  }
  .fc-highlight {
    background: #fff !important;
    border-radius: 0.5rem;
  }
  /* calendar-events-allDay */
  .fc-h-event {
    border: 1px solid var(--color-mainColor);
    background-color: var(--color-mainColor);
  }
  /* calednar-events-time */
  .fc .fc-daygrid-day-top {
    justify-content: center;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: var(--color-subBgColor);
  }
  .fc-daygrid-event-dot {
    /* border: 4px solid #3788d8; */
    /* border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8); */
    display: none;
  }
  /* calendar-table */
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }
  .fc-theme-standard td,
  .fc-theme-standard th {
    border: none;
  }
`;

// * Calendar Schedule

const CalendarScheduleContainer = styled.section`
  height: 100%;
  /* schedule - title */
  .schedule-title {
    margin-top: 15px;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 5px;
    background-color: var(--color-subBgColor);
    display: flex;
    align-items: center;
    h1 {
      font-size: var(--font-main-1);
      color: var(--color-mainColor);
    }
    p {
      margin-left: 1rem;
      font-size: var(--font-sub-1);
      color: var(--color-subText);
    }
  }
`;

// * Calendar Schedule Events

const CalendarScheduleEventsContainer = styled.ul`
  height: calc(100% - 26.5px - 5rem);
  overflow-y: scroll;
  background-color: var(--color-subBgColor);
  border-radius: 0.5rem;
  li {
    ${flexBetween}
    margin: 1rem;
    background-color: var(--color-mainColor);
    border-radius: 0.5rem;
    padding: 1rem;
  }
  .today-title {
    h1 {
      color: #fff;
      font-size: var(--font-sub-1);
    }
  }
  .today-time {
    display: flex;
    align-items: center;
    .today-time-icon {
      svg {
        color: var(--color-subBgColor);
        font-size: 2rem;
      }
    }
    .today-time-content {
      background-color: #fff;
      ${flexCenter}
      margin-left: 1rem;
      padding: 01rem;
      border-radius: 0.5rem;
      h1 {
        font-size: var(--font-sub-2);
        font-weight: 400;
      }
    }
  }
`;

// * Calendar User

const CalendarUserContainer = styled.nav`
  margin: 5px 0;
  ul {
    ${flexCenter}
  }
  li {
    padding: 0.5rem 1rem;
    background-color: var(--color-subBgColor);
    border-radius: 0.5rem;
    margin: 0 0.5rem;
  }
  a {
    font-size: var(--font-sub-2);
    text-decoration: none;
    color: var(--color-subText);
  }
  a.active {
    color: var(--color-mainColor);
    font-weight: 700;
  }
`;

// * Calendar Modal

const CalendarModalForm = styled.form`
  .calendar-form-title {
    ${flexColCenter}
    h1 {
      color: var(--color-mainColor);
      font-size: var(--font-title-2);
      font-style: italic;
      font-weight: 500;
    }
    p {
      margin-top: 0.5rem;
      color: var(--color-subText);
      font-size: var(--font-sub-2);
    }
  }
  .calendar-form-contents {
    ${flexColCenter}
    & > div {
      ${flexEvenly}
      width: 100%;
    }
    input[type="text"] {
      margin-top: 1.5rem;
      width: 100%;
      outline: none;
      padding: 1rem;
      font-size: var(--font-sub-2);
      border: 1px solid var(--color-subBgColor);
      border-radius: 0.5rem;
      &::placeholder {
        color: var(--color-borderColor);
      }
    }
    input[type="text"]:focus {
      border: 1px solid var(--color-borderColor);
    }
    label {
      cursor: pointer;
      font-size: var(--font-sub-2);
      margin-top: 1.5rem;
      padding: 1rem 1.5rem;
      border: 1px solid var(--color-borderColor);
      border-radius: 0.5rem;
    }
    label.radio-checked {
      background-color: var(--color-subBgColor);
      color: var(--color-primaryText);
    }
    span {
      margin-top: 3rem;
      font-size: var(--font-main-1);
      font-weight: 300;
    }
    /* calendar-form-time-picker */
    .rc-time-picker {
      margin-top: 1.5rem;
      input[type="text"] {
        margin-top: 0;
      }
    }
    /* calendar-form-modal-radio */
    input[type="radio"] {
      display: none;
    }
  }
`;

// * Calendar Delete
const CalendarDeleteContainer = styled.form`
  .calendar-delete-title {
    ${flexColCenter}
    h1 {
      color: var(--color-mainColor);
      font-size: var(--font-main-1);
      font-weight: 500;
    }
  }
`;

const CalendarModalError = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  p {
    color: red;
    font-size: var(--font-sub-2);
    font-weight: 300;
  }
`;

export {
  CalendarModalForm,
  CalendarEventContainer,
  CalendarScheduleContainer,
  CalendarScheduleEventsContainer,
  CalendarModalError,
  CalendarUserContainer,
  CalendarDeleteContainer,
};
