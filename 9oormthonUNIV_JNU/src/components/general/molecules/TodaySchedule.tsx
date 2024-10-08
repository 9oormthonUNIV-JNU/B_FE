import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";

type Event = {
    date: string;
    name: string;
    member: string;
    description: string;
};

type TodayScheduleProps = {
    events: Event[];
};

const TodayScheduleContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top:70px;

`;
const TodaySchedule: React.FC<TodayScheduleProps> = ({ events }) => {
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];
    const todayEvents = events.filter(event => event.date === todayStr);

    return (
        <TodayScheduleContainer>
            <CustomText textStyle="b2" color="#fff">오늘의 일정</CustomText>
            {todayEvents.length > 0 ? (
                todayEvents.map((event, index) => (
                    <CustomText key={index} textStyle="b1" color="#fff">
                        {event.name} ({event.member})
                    </CustomText>
                ))
            ) : (
                <CustomText textStyle="nav" color="#fff">
                    오늘의 일정은 없습니다.
                </CustomText>
            )}
        </TodayScheduleContainer>
    );
};

export default TodaySchedule;
