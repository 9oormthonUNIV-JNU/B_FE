import CustomCalendar from "../molecules/CustomCalendar";
import CustomText from "../../common/atoms/CustomText";
import styled from "styled-components";
import CustomDate from "../atoms/CustomDate";
import { useState } from "react";
import TodaySchedule from "../molecules/TodaySchedule";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;

  .calendar {
    padding: 20px;
  }
`;

const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;

  .calendar_content {
    display: flex;
    flex-direction: column;
    padding: 80px;
    margin-bottom: 20px;
    align-items: center;
  }
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #9fbeef;

  padding-top: 130px;

  .today_schedule{
   display: flex;
  flex-direction: row;
 justify-items: start;
 padding-left:50px;
  
  }
`;

const GeneralCalendarTemplate = () => {
    const [events, setEvents] = useState([
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
    ]);

    return (
        <CalendarContainer>
            <DateContainer>
                <CustomDate />
                <div className="today_schedule">
                    <TodaySchedule events={events} />
                </div>
            </DateContainer>

            <CalendarContent>
                <div className="calendar_content">
                    <CustomText textStyle="h1">일정 관리</CustomText>
                </div>

                <div className="calendar">
                    <CustomCalendar admin={false} />
                </div>
            </CalendarContent>
        </CalendarContainer>
    );
};

export default GeneralCalendarTemplate;
