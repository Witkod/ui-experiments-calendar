import React from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  subMonths
} from "date-fns";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import polish from "date-fns/locale/pl";

export function Header({ date, onChange }) {
  const monthName = format(date, "MMMM");
  const year = format(date, "Y");

  return (
    <UIHeader>
      <UIButton
        onClick={() => {
          const endOfPrevious = endOfMonth(subMonths(date, 1));
          onChange(endOfPrevious);
        }}
      >
        <IoIosArrowBack color="#fff" />
      </UIButton>
      <UIDateTitle>
        <UIMonth>{monthName + " "}</UIMonth>
        <UIYear>{year}</UIYear>
      </UIDateTitle>
      <UIButton
        onClick={() => {
          const startOfNext = startOfMonth(addMonths(date, 1));
          onChange(startOfNext);
        }}
      >
        <IoIosArrowForward color="#fff" />
      </UIButton>
    </UIHeader>
  );
}

const UIHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-size: 1.5rem;
  text-align: center;
`;

const UIDateTitle = styled.div`
  flex: 17;
  display: inline-block;
`;

const UIMonth = styled.span`
  font-weight: 600;
`;
const UIYear = styled.span`
  font-weight: 400;
`;

const UIButton = styled.div`
  cursor: pointer;
  flex: 1;
  background-color: rgba(118, 67, 215, 0.8);

  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  transition: 0.33s all;
  &:hover {
    transform: scale(1.1);
  }
`;
