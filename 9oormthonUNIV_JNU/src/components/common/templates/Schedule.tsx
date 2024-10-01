import { useState } from "react";
import styled from "styled-components";
import ScheduleBoxes from "../organisms/ScheduleBoxes";
import CustomText from "../atoms/CustomText";
import { RecruitData, EventData } from "../../../constants/ScheduleList";
import LabelButton from "../atoms/LabelButton";

const ScheduleContainer = styled.div`
  background-color: #f5f9fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .schedule_content {
    padding: 80px;
    margin-bottom: 69px;
  }

  .button_container {
    display: flex;
    justify-content: center;
    width: 20%;
    gap: 8px;
    margin-bottom: 206px;
  }
`;

const Schedule = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const ScheduleData = selectedTab === 1 ? RecruitData : EventData;

  return (
    <ScheduleContainer>
      <div className="schedule_content">
        <CustomText textStyle="h1">구름톤 유니브 전남대 3기 일정</CustomText>
      </div>

      <div className="button_container">
        <LabelButton
          label="교내 리쿠르팅"
          isActive={selectedTab === 1}
          onClick={() => setSelectedTab(1)}
        />
        <LabelButton
          label="중앙 행사 일정"
          isActive={selectedTab === 2}
          onClick={() => setSelectedTab(2)}
        />
      </div>

      <ScheduleBoxes ScheduleData={ScheduleData} />
    </ScheduleContainer>
  );
};

export default Schedule;
