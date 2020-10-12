import React from "react";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";
import styled from "styled-components";

const now = new Date();
const firstDay = startOfWeek(now, { weekStartsOn: 1 });
const lastDay = endOfWeek(now, { weekStartsOn: 1 });

const days = eachDayOfInterval({ start: firstDay, end: lastDay });

export function WeekDaysNames() {
  return (
    <UIDays>
      {days.map(dayDate => (
        <UILabel key={dayDate.toISOString()}>
          {format(dayDate, "EEEEEE").toLowerCase()}
        </UILabel>
      ))}
    </UIDays>
  );
}

const UIDays = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 4%;
`;

const UILabel = styled.div`
  font-weight: 450;
  opacity: 0.3;
`;
