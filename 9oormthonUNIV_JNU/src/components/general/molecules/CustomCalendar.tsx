import { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomModal from "../../admin/molecules/CustomModal";
import LabelButton from "../../common/atoms/LabelButton";
import ReactDOM from "react-dom";

const CalendarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 20px;
  margin-top: 80px;
  z-index: 1; /* 추가 */

  .calendar_schedule_add {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 10px;
    right: 0px;
  }
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
    overflow: visible; /* 추가 */

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

const DateText = styled.div<DateTextProps>`
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${({ isSunday, isSelected }) =>
    isSelected ? "#fff" : isSunday ? "#ff6d57" : "#000"};
  position: relative;
  z-index: 1;

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
      z-index: -1;
    }
  `}
`;

type Schedule = {
  date: string;
  name: string;
  member: string;
  description: string;
};

const EventText = styled.div`
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
  position: relative;
  cursor: pointer;

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const DropdownMenu = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  position: absolute;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 14px 12px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  z-index: 10000; /* 더 높은 z-index 설정 */

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const DropdownItem = styled.div<{ form: boolean }>`
  box-sizing: border-box;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 27px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #d8d8d8;
  }
`;

type CustomCalendarProps = {
  admin?: boolean;
};

const DropdownMenuPortal = ({
  children,
  position,
}: {
  children: React.ReactNode;
  position: { top: number; left: number; width: number };
}) => {
  return ReactDOM.createPortal(
    <DropdownMenu
      style={{
        top: position.top,
        left: position.left,
        width: `${position.width}px`,
      }}
    >
      {children}
    </DropdownMenu>,
    document.body
  );
};

const CustomCalendar: React.FC<CustomCalendarProps> = ({ admin }) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // 드롭다운 열릴 때 이벤트의 날짜를 기억
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalForm, setModalForm] = useState<Schedule>({
    date: "",
    name: "",
    member: "",
    description: "",
  });

  const [events, setEvents] = useState<Schedule[]>([
    {
      date: "2024-10-15",
      name: "회의",
      member: "최지원",
      description: "팀 회의",
    },
    {
      date: "2024-10-22",
      name: "프로젝트 마감",
      member: "최지원",
      description: "최종 마감",
    },
  ]); // 이벤트 데이터

  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });

  const toggleDropdown = (
    date: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = (
      event.currentTarget as HTMLDivElement
    ).getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
    setOpenDropdown(openDropdown === date ? null : date); // 현재 열려있는 드롭다운을 클릭하면 닫음, 다른 타일을 클릭하면 열림
  };

  const handleEditEvent = () => {
    alert("일정 수정 클릭됨");
    setOpenDropdown(null); // 수정 후 드롭다운 닫음
  };

  const handleDeleteEvent = () => {
    alert("일정 삭제 클릭됨");
    setEvents(events.filter((event) => event.date !== modalForm.date));
    setOpenDropdown(null); // 삭제 후 드롭다운 닫음
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setModalForm({ date: "", name: "", member: "", description: "" });
  };

  const handleModalChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEvents([...events, modalForm]);
    handleCloseModal();
  };

  const findEvent = (tileDate: Date) => {
    const dateStr = tileDate.toISOString().split("T")[0];
    return events.find((event) => event.date === dateStr);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.setMonth(date.getMonth() - 1));
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
    setDate(nextMonth);
  };

  const formattedMonthYear = date
    ? date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
      })
    : "";

  const currentMonth = date.getMonth();

  const handleDateClick: CalendarProps["onChange"] = (value) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value)) {
      setSelectedDate(value[0]);
    }
  };

  return (
    <CalendarWrapper>
      {/* 월 네비게이션 - 일정 추가하기 버튼을 오른쪽에 위치 */}
      <MonthNavigation>
        <NavButton onClick={handlePrevMonth}>{"<"}</NavButton>
        <MonthText>{formattedMonthYear}</MonthText>
        <NavButton onClick={handleNextMonth}>{">"}</NavButton>
      </MonthNavigation>
      {admin && (
        <div className="calendar_schedule_add">
          <LabelButton label="+ 일정 추가" onClick={handleOpenModal} />
        </div>
      )}

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
              {findEvent(tileDate) && (
                <EventText
                  onClick={(e) =>
                    toggleDropdown(tileDate.toISOString().split("T")[0], e)
                  }
                >
                  <CustomText textStyle="nav">
                    {findEvent(tileDate)?.name}
                  </CustomText>
                  {openDropdown === tileDate.toISOString().split("T")[0] &&
                    admin && (
                      <DropdownMenuPortal position={dropdownPosition}>
                        <DropdownItem form={true} onClick={handleEditEvent}>
                          <CustomText textStyle="nav">일정 수정</CustomText>
                        </DropdownItem>
                        <DropdownItem form={true} onClick={handleDeleteEvent}>
                          <CustomText textStyle="nav">일정 삭제</CustomText>
                        </DropdownItem>
                      </DropdownMenuPortal>
                    )}
                </EventText>
              )}
            </>
          ) : null
        }
      />

      {/* 일정 추가 모달 - admin 모드일 때만 표시 */}
      {admin && (
        <CustomModal
          modalType="일정 추가하기"
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          onSave={handleSave}
          modalForm={modalForm}
          handleModalChange={handleModalChange}
        />
      )}
    </CalendarWrapper>
  );
};

export default CustomCalendar;
