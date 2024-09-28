import { useState } from "react";
import styled from "styled-components";
import ScheduleBoxes from "../organisms/ScheduleBoxes";
import CustomText from "../atoms/CustomText";
import { RecruitData, EventData } from "../../../constants/ScheduleList";
import CustomButton from "../atoms/CustomButton";

const ScheduleContainer = styled.div`
 background-color: #F5F9FE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  

  .schedule_content {
    padding: 80px;
    marginbotton:69px;
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
        <CustomButton
          borderColor= {selectedTab === 1 ? "#778FB9" : "#E5E5E5"}
          borderWidth="1"
          bgColor={selectedTab === 1 ? "#9FBEF7" : "#F7F7F7"}
          textColor={selectedTab === 1 ? "#FFF" : "#000"}
          hoverColor={selectedTab === 1 ? "#778FB9" : "#E5E5E5"}
          radius="30"
          textStyle="b3"
          onClick={() => setSelectedTab(1)}
        >
          교내 리쿠르팅
        </CustomButton>
        <CustomButton
          borderColor= {selectedTab === 2 ? "#778FB9" : "#E5E5E5"}
          borderWidth="1"
          bgColor={selectedTab === 2 ? "#9FBEF7" : "#F7F7F7"}
          textColor={selectedTab === 2 ? "#FFF" : "#000"}
          hoverColor={selectedTab === 2 ? "#778FB9" : "#E5E5E5"}
          radius="30"
          textStyle="b3"
          onClick={() => setSelectedTab(2)}
        >
          중앙 행사 일정
        </CustomButton>
      </div>

      <ScheduleBoxes ScheduleData={ScheduleData} />
    </ScheduleContainer>
  );
};

export default Schedule;
