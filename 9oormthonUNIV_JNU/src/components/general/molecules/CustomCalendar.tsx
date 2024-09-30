import { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white; /* 전체 배경 흰색 */
  padding: 20px;
`;

const MonthNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  gap: 32px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: black;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;

  .react-calendar__tile {
    position: relative;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    box-sizing: border-box;
    border-top: 1px solid black !important;
    background-color: white;
    border: none; /* 모든 경계선 제거 */

    /* 기본 숫자 숨기기 */
    & > abbr {
      display: none; /* 기본 날짜 텍스트 숨기기 */
    }
  }

  /* 토요일은 검은색으로 설정 */
  .react-calendar__month-view__days__day--weekend:nth-child(7n) {
    color: black;
  }

  /* 일요일 텍스트 색상 #ff6d57로 설정 */
  .react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
    color: #ff6d57; /* 일요일(SUN)의 글씨 색상을 #ff6d57로 설정 */
  }

  .react-calendar__tile--active {
    background-color: #006edc;
    color: white;
  }

  /* 요일을 대문자 세 글자로 설정 */
  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin-bottom: 8px;
  }

  /* 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday abbr {
    font-family: "Pretendard", sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none; /* 밑줄 제거 */
  }

  /* 기본 네비게이션을 숨깁니다 */
  .react-calendar__navigation {
    display: none;
  }
`;

// 날짜 텍스트 스타일링
const DateText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${({ isSunday }) => (isSunday ? "#ff6d57" : "#000")};
`;

const EventList = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: black;
`;

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  // 월을 이동하는 함수 (이전 달, 다음 달)
  const handlePrevMonth = () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() - 1));
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
    setDate(nextMonth);
  };

  // 월과 연도를 표시하는 형식
  const formattedMonthYear = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
  });

  // 현재 월을 저장
  const currentMonth = date.getMonth();

  return (
    <CalendarWrapper>
      {/* 월 네비게이션 */}
      <MonthNavigation>
        <NavButton onClick={handlePrevMonth}>{"<"}</NavButton>
        <DateText>{formattedMonthYear}</DateText>
        <NavButton onClick={handleNextMonth}>{">"}</NavButton>
      </MonthNavigation>

      {/* 달력 */}
      <StyledCalendar
        onChange={setDate}
        value={date}
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
        }
        /* 숫자를 두 자리 형식으로 표시 */
        tileContent={
          ({ date, view }) =>
            view === "month" && date.getMonth() === currentMonth ? (
              <DateText isSunday={date.getDay() === 0}>
                {date.getDate().toString().padStart(2, "0")}
                {/* 숫자를 두 자리로 */}
              </DateText>
            ) : null /* 현재 월에 속하지 않는 날짜는 표시하지 않음 */
        }
      />
    </CalendarWrapper>
  );
};

export default CustomCalendar;
