import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LabelButton from "../atoms/LabelButton";
import ActivityBoxes from "../organisms/ActivityBoxes";
import CustomText from "../atoms/CustomText";
import { instance } from "../../../apis/instance";

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
};

const Activity: React.FC<ActivityProps> = ({ activityType }) => {
  const [selectedTab, setSelectedTab] = useState<number>(activityType);
  const [activityData, setActivityData] = useState<any[]>([]);

  // 카테고리 매핑
  const getCategoryFromTab = (tab: number) => {
    switch (tab) {
      case 1:
        return "Project";
      case 2:
        return "Seminar";
      case 3:
        return "Study";
      case 4:
        return "Networking";
      default:
        return "";
    }
  };

  // 게시글 리스트 api
  const fetchActivityData = async () => {
    const category = getCategoryFromTab(selectedTab);

    try {
      const response = await instance.post("api/post", {
        acti_category: category, 
      });

      const postList = response.data.response.post_list;

      const formattedData = postList.map((post: any) => ({
        image: [post.image],
        subject: post.post_title,
        tag: [post.project_category, post.date, post.part],
        post_id: post.post_id,
      }));

      setActivityData(formattedData);
    } catch (error) {
      console.error("게시글 데이터를 불러오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchActivityData();
  }, [selectedTab]);

  const Type = getCategoryFromTab(selectedTab);

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

      <ActivityBoxes ActivityData={activityData} Type={Type} />
    </ActivityContainer>
  );
};

export default Activity;
