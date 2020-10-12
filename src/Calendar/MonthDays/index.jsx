import React, { useState } from "react";
import { startOfMonth, eachWeekOfInterval } from "date-fns";
import { endOfMonth } from "date-fns/esm";
import { Week } from "./Week";
import styled from "styled-components";
import { WeekDaysNames } from "./WeekDaysNames";

export function MonthDays({ date }) {
  const [selectedDay, setSelectedDay] = useState(null);
  const firstDayMonth = startOfMonth(date);
  const lastDayMonth = endOfMonth(date);

  const weeks = eachWeekOfInterval(
    {
      start: firstDayMonth,
      end: lastDayMonth
    },
    { weekStartsOn: 1 }
  );

  return (
    <UIMonth>
      <WeekDaysNames />
      {weeks.map((firstDayWeek, index) => (
        <Week
          key={firstDayWeek.toISOString()}
          date={date}
          onChange={setSelectedDay}
          selectedDay={selectedDay}
          firstDayWeek={firstDayWeek}
        />
      ))}
    </UIMonth>
  );
}

const UIMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 5;
`;
