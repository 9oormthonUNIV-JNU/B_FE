import styled from "styled-components";
import ActivityBox from "../molecules/ActivityBox";
import { useState } from "react";
import CustomModal from "../atoms/CustomModal";
import { instance } from "../../../apis/instance";

const ActivityBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 100%;
  margin-bottom: 200px;
  row-gap: 44px;
  column-gap: 40px;
  justify-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

type ActivityBoxesProps = {
  ActivityData?: Array<{
    image: string[];
    subject: string;
    tag: string[];
    post_id: number;
  }>;
  Type: string;
};

const ActivityBoxes: React.FC<ActivityBoxesProps> = ({ ActivityData, Type }) => {
  if (!ActivityData || ActivityData.length === 0) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [activityDetail, setActivityDetail] = useState<any>(null);

 
  const handleOpenModal = async (activity: any) => {
    setSelectedActivity(activity);
    try {
      const response = await instance.get(`api/post/${activity.post_id}`);
      setActivityDetail(response.data.response);
      setIsOpen(true);
    } catch (error) {
      console.error("상세 정보를 불러오는 데 실패했습니다.", error);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedActivity(null);
    setActivityDetail(null);
  };

  return (
    <ActivityBoxesContainer>
      {ActivityData.map((data, index) => (
        <ActivityBox
          key={index}
          image={data.image}
          subject={data.subject}
          tag={data.tag}
          onClick={() => handleOpenModal(data)}
        />
      ))}

      {/* 모달 컴포넌트 */}
      {isOpen && activityDetail && (
        <CustomModal
          type={Type}
          isOpen={isOpen}
          onClose={handleCloseModal}
          image={activityDetail.image ? [activityDetail.image] : []}
          subject={activityDetail.title}
          description={activityDetail.content}
          tag={[activityDetail.participant, activityDetail.date]}
          link="https://github.com/9oormthonUNIV-JNU"
        />
      )}
    </ActivityBoxesContainer>
  );
};

export default ActivityBoxes;
