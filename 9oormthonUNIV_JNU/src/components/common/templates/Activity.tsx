import LabelButton from "../atoms/LabelButton";
import styled from "styled-components";
import {
  ProjectData,
  SeminarData,
  StudyData,
  NetworkingData,
} from "../../../constants/ActivityList";
import { useState } from "react";
import ActivityBoxes from "../organisms/ActivityBoxes";
import CustomText from "../atoms/CustomText";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .activity_content {
    padding: 80px;
    margin-bottom: 20px;
  }

  .button_container {
    display: flex;
    justify-content: center;
    width: 30%;
    gap: 8px;
    margin-bottom: 100px;
  }
`;


type ActivityProps = {
  activityType: number;
  Type:string;
};

const Activity: React.FC<ActivityProps> = ({ activityType }) => {
  const [selectedTab, setSelectedTab] = useState<number>(activityType);
  const ActivityData =
    selectedTab === 1
      ? ProjectData
      : selectedTab === 2
      ? SeminarData
      : selectedTab === 3
      ? StudyData
      : selectedTab === 4
      ? NetworkingData
      : [];

      const Type =
      selectedTab === 1
        ? "프로젝트"
        : selectedTab === 2
        ? "세미나"
        : selectedTab === 3
        ? "스터디"
        : selectedTab === 4
        ? "네트워킹"
        : "";
  
  return (
    <ActivityContainer>
      <div className="activity_content">
        <CustomText textStyle="h1">Activities</CustomText>
      </div>

      <div className="button_container">
        <LabelButton
          label="프로젝트"
          isActive={selectedTab === 1}
          onClick={() => setSelectedTab(1)}
        />
        <LabelButton
          label="세미나"
          isActive={selectedTab === 2}
          onClick={() => setSelectedTab(2)}
        />

        <LabelButton
          label="스터디"
          isActive={selectedTab === 3}
          onClick={() => setSelectedTab(3)}
        />

        <LabelButton
          label="네트워킹"
          isActive={selectedTab === 4}
          onClick={() => setSelectedTab(4)}
        />
      </div>
      <ActivityBoxes ActivityData={ActivityData} Type={Type} />
    </ActivityContainer>
  );
};
export default Activity;
