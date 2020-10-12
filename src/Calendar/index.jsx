import React from "react";
import { Header } from "./Header";
import { MonthDays } from "./MonthDays";
import styled from "styled-components";

export function Calendar({ date, onChange }) {
  return (
    <UICalendarContainer>
      <UICalendar>
        <Header date={date} onChange={onChange} />
        <SmallSpacing />
        <MonthDays date={date} onChange={onChange} />
      </UICalendar>
      <UICalendarWrap1 />
      <UICalendarWrap2 />
    </UICalendarContainer>
  );
}

const UICalendar = styled.div`
  position: relative;
  z-index: 2;
  background-color: white;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  flex: 1;
`;

const SmallSpacing = styled.div`
  margin-bottom: 10px;
`;

const DECORATION_HEIGHT = 30;

const UICalendarWrap1 = styled.div`
  border-radius: 30px;
  margin: 0 20px;
  height: ${DECORATION_HEIGHT * 0.66}px;
  margin-top: ${-DECORATION_HEIGHT / 2}px;

  background-color: rgba(201, 179, 239, 0.7);

  z-index: -1;
`;

const UICalendarWrap2 = styled(UICalendarWrap1)`
  margin-left: 40px;
  margin-right: 40px;
  opacity: 0.5;
  /* margin-top: ${-DECORATION_HEIGHT / 2}px; */
`;

const UICalendarContainer = styled.div`
  flex: 1;
`;
