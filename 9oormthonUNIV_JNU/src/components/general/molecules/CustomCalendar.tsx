import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";

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
    height: 145px;
    width: 145px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    box-sizing: border-box;
    border-top: 1px solid black !important;
    background-color: white;
    border: none;
    cursor: pointer;

    & > abbr {
      display: none;
    }
  }

  /* 오늘 날짜 타일의 배경색을 설정 */
  .react-calendar__tile--today {
    background-color: #f4f4f4 !important; /* 오늘 날짜의 배경색 설정 */
  }

  .react-calendar__month-view__days__day--weekend:nth-child(7n) {
    color: black;
  }

  .react-calendar__month-view__weekdays__weekday:nth-child(1) abbr {
    color: #ff6d57;
  }

  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin-bottom: 8px;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    font-family: "Pretendard";
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
  }

  .react-calendar__navigation {
    display: none;
  }
`;

const MonthText = styled.div`
  font-family: "Pretendard";
  font-size: 32px;
  font-weight: 500;
`;

type DateTextProps = {
  isSunday: boolean;
  isSelected: boolean;
};

// 날짜 텍스트 스타일링
const DateText = styled.div<DateTextProps>`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${({ isSunday, isSelected }) =>
    isSelected
      ? "#fff"
      : isSunday
      ? "#ff6d57"
      : "#000"}; /* 선택된 날짜는 흰색, 일요일은 빨간색, 나머지는 검정 */
  position: relative; /* 동그라미가 숫자 뒤에 위치하도록 설정 */
  z-index: 1;

  /* 클릭한 날짜 동그라미 스타일 */
  ${({ isSelected }) =>
    isSelected &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30px;
      height: 30px;
      background-color: #8FABDE;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: -1; /* 동그라미가 숫자 뒤에 위치 */
    }
  `}
`;

type EventProps = {
  date: string;
  title: string;
};

const EventTextContainer = styled.div`
  margin: 8px 0px;
  border-radius: 10px;
  padding: 4px 8px;
  align-items: center;
  display: flex;
  height: 27px;
  box-sizing: border-box;
  background-color: #e1ebfd;
  justify-content: flex-start;
  width: 100%;
  margin-top: 8px;

  * {
    white-space: nowrap; /* 텍스트를 한 줄로 유지 */
    overflow: hidden; /* 넘치는 부분 숨기기 */
    text-overflow: ellipsis; /* 넘치는 부분을 ...로 표시 */
  }
`;

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 이벤트 데이터 배열
  const events: EventProps[] = [
    { date: "2024-10-15", title: "회의" },
    { date: "2024-10-22", title: "프로젝트 마감" },
  ];

  // 날짜에 해당하는 이벤트 찾기
  const findEvent = (tileDate: Date) => {
    const dateStr = tileDate.toISOString().split("T")[0]; // YYYY-MM-DD 형식
    return events.find((event) => event.date === dateStr);
  };

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
  const formattedMonthYear = date
    ? date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
      })
    : "";

  // 현재 월을 저장
  const currentMonth = date.getMonth();

  // 날짜 클릭 핸들러 (선택된 날짜를 설정)
  const handleDateClick: CalendarProps["onChange"] = (value) => {
    // value가 단일 날짜일 때 처리
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      // 만약 날짜 배열이라면 첫 번째 값을 선택
      setSelectedDate(value[0]);
    }
  };

  return (
    <CalendarWrapper>
      {/* 월 네비게이션 */}
      <MonthNavigation>
        <NavButton onClick={handlePrevMonth}>{"<"}</NavButton>
        <MonthText>{formattedMonthYear}</MonthText>
        <NavButton onClick={handleNextMonth}>{">"}</NavButton>
      </MonthNavigation>

      {/* 달력 */}
      <StyledCalendar
        onChange={handleDateClick}
        value={date}
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase()
        }
        tileClassName={({ date: tileDate }) =>
          tileDate.toDateString() === new Date().toDateString()
            ? "react-calendar__tile--today"
            : ""
        }
        tileContent={({ date: tileDate, view }) =>
          view === "month" && tileDate.getMonth() === currentMonth ? (
            <>
              <DateText
                isSunday={tileDate.getDay() === 0}
                isSelected={
                  !!(
                    selectedDate &&
                    tileDate.getDate() === selectedDate.getDate() &&
                    tileDate.getMonth() === selectedDate.getMonth() &&
                    tileDate.getFullYear() === selectedDate.getFullYear()
                  )
                }
              >
                {tileDate.getDate().toString().padStart(2, "0")}
              </DateText>
              {/* 이벤트가 있으면 해당 타일에 이벤트 제목 표시 */}
              {findEvent(tileDate) && (
                <EventTextContainer>
                  <CustomText textStyle="nav" onClick={() => {}}>
                    {findEvent(tileDate)?.title} {/* 올바르게 표시 */}
                  </CustomText>
                </EventTextContainer>
              )}
            </>
          ) : null
        }
      />
    </CalendarWrapper>
  );
};

export default CustomCalendar;
