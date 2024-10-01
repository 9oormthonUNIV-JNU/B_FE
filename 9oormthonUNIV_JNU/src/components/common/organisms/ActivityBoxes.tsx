import styled from "styled-components";
import ActivityBox from "../molecules/ActivityBox";

const ActivityBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  width: 100%;
  justify-items: center;
  justify-content: center;
  box-sizing: border-box;
  align-items:center;
  
  
`;

const ActivityBoxes: React.FC<{
    ActivityData?: Array<{
        image: string;
        subject: string;
        tag: string[];
    }>;
}> = ({ ActivityData }) => {
    if (!ActivityData || ActivityData.length === 0) {
        return null;
    }

    return (
        <ActivityBoxesContainer>
            {ActivityData.map((data, index) => (
                <ActivityBox
                    key={index}
                    image={data.image}
                    subject={data.subject}
                    tag={data.tag}
                />
            ))}
        </ActivityBoxesContainer>
    );
};

export default ActivityBoxes;



