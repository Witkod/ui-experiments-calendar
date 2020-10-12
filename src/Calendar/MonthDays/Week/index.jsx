import { eachDayOfInterval, endOfWeek, isSameDay } from "date-fns";
import React from "react";
import styled from "styled-components";
import { Day } from "./Day";

export function Week({ date, onChange, firstDayWeek, selectedDay }) {
  const lastDayWeek = endOfWeek(firstDayWeek, { weekStartsOn: 1 });
  const weekdays = eachDayOfInterval({
    start: firstDayWeek,
    end: lastDayWeek
  });

  return (
    <UIWeek>
      {weekdays.map(weekDayDate => {
        const isThisDaySelected = isSameDay(weekDayDate, selectedDay);
        return (
          <Day
            key={weekDayDate.toISOString()}
            date={date}
            day={weekDayDate}
            isSelected={isThisDaySelected}
            onChange={onChange}
          />
        );
      })}
    </UIWeek>
  );
}

const UIWeek = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;
