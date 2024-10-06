import styled from "styled-components";
import ActivityBox from "../molecules/ActivityBox";
import { useState } from "react";
import CustomModal from "../atoms/CustomModal";

const ActivityBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width:100%;
  margin-bottom: 200px;
  row-gap: 44px;
  column-gap: 40px;
  justify-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
`;

const ActivityBoxes: React.FC<{
    ActivityData?: Array<{
        image: string[];
        subject: string;
        tag: string[];
    }>;
    Type: string;
}> = ({ ActivityData, Type }) => {
    if (!ActivityData || ActivityData.length === 0) {
        return null;
    }
    const [isOpen, setIsOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<any>(null);

    const handleOpenModal = (activity: any) => {
        setSelectedActivity(activity);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedActivity(null);
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

            {selectedActivity && (
                <CustomModal
                    type={Type}
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                    image={selectedActivity.image}
                    subject={selectedActivity.subject}
                    description="상세 설명"
                    tag={selectedActivity.tag}
                    link="https://github.com/9oormthonUNIV-JNU"
                />
            )}
        </ActivityBoxesContainer>
    );
};

export default ActivityBoxes;
