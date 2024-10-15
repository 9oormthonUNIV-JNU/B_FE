import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LabelButton from "../atoms/LabelButton";
import ActivityBoxes from "../organisms/ActivityBoxes";
import CustomText from "../atoms/CustomText";
import { instance } from "../../../apis/instance";

// 스타일 컴포넌트 정의
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

// 게시글 데이터 타입 정의
interface Post {
  image: string[];
  subject: string;
  tag: string[];
  post_id: number;
}

// API 응답 타입 정의
interface ApiResponse {
  response: {
    post_list: {
      image: string;
      post_title: string;
      project_category: string;
      date: string;
      part: string;
      post_id: number;
    }[];
  };
}

const Activity: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);  // 기본 탭을 1로 설정
  const [activityData, setActivityData] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 카테고리 매핑 함수
  const getCategoryFromTab = (tab: number): string => {
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

  // 게시글 리스트 조회 API
  const fetchActivityData = async () => {
    const category = getCategoryFromTab(selectedTab);

    try {
      const response = await instance.get<ApiResponse>("/api/post", {
        params: {
          category: category,
        },
        timeout: 10000,
      });

      const postList = response.data.response.post_list;

      if (postList.length === 0) {
        setErrorMessage("해당 카테고리에 게시글이 없습니다.");
        setActivityData([]); 
        return;
      }

      const formattedData: Post[] = postList.map((post) => ({
        image: [post.image],
        subject: post.post_title,
        tag: [post.project_category, post.date, post.part],
        post_id: Number(post.post_id),
      }));

      setActivityData(formattedData);
      setErrorMessage(""); 
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        setErrorMessage("요청 시간이 초과되었습니다. 네트워크 상태를 확인해주세요.");
      } else if (error.response && error.response.status === 404) {
        setErrorMessage("게시글을 찾을 수 없습니다.");
        setActivityData([]);
      } else {
        setErrorMessage("게시글 데이터를 불러오는 데 실패했습니다.");
        console.error("API 호출 오류:", error);
      }
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

      {/* 에러 메시지가 있을 때 출력 */}
      {errorMessage && <div>{errorMessage}</div>}

      {/* ActivityBoxes 컴포넌트에 데이터 전달 */}
      <ActivityBoxes ActivityData={activityData} Type={Type} />
    </ActivityContainer>
  );
};

export default Activity;
