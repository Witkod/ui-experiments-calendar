import React, { useMemo } from "react";
import { isSameDay, format, isSameMonth } from "date-fns";
import styled, { css } from "styled-components";

export function Day({ date, onChange, day, isSelected }) {
  const isTodayDay = isSameDay(day, new Date());
  const isThisDayInCurrentMonth = isSameMonth(day, date);

  function handleDayClick() {
    if (isSelected) {
      onChange(null);
      return;
    }

    onChange(day);
  }

  return (
    <UIDay
      isToday={isTodayDay}
      isSelected={isSelected}
      isSameMonth={isThisDayInCurrentMonth}
      onClick={handleDayClick}
    >
      <UISquareWrapper>
        <UISquareContent>{format(day, "d")}</UISquareContent>
      </UISquareWrapper>
    </UIDay>
  );
}

const UIDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 10px;
  transition: 0.33s all;
  cursor: pointer;

  background-color: ${props => {
    if (props.isSelected) {
      return props.theme.colors.primary;
    }

    if (props.isToday) {
      return props.theme.colors.days.today;
    }

    return "transparent";
  }};

  font-weight: ${props => {
    if (props.isSameMonth) {
      return 600;
    }

    return 400;
  }};
  color: ${props => {
    if (props.isSelected) {
      return "#fff";
    }

    return "#000";
  }};
  opacity: ${props => {
    if (!props.isSameMonth) {
      return 0.3;
    }

    return 1;
  }};
`;

const UISquareWrapper = styled.div`
  padding-bottom: 100%;
  width: 100%;
  position: relative;
`;

const absoluteStretchCss = css`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const UISquareContent = styled.div`
  ${absoluteStretchCss};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UIText = styled.div``;
