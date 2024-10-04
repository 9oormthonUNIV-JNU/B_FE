import styled from "styled-components";
import CustomBox from "../atoms/CustomBox";
import CustomTag from "../atoms/CustomTag";
import CustomText from "../atoms/CustomText";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ActivityContents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

type ActivityBoxProps = {
  image: string[];
  subject: string;
  tag: string[];
  onClick?: () => void;
};

const ActivityBox: React.FC<ActivityBoxProps> = ({ image, subject, tag, onClick }) => {
  return (
    <CustomBox width={480} height={376} onClick={onClick}>
      <ActivityContainer>
        <ActivityImage src={image[0]} />
        <ActivityContents>
          <CustomText textStyle="b2">{subject}</CustomText>
          <TagContainer>
            {tag.map((tag, index) => (
              <CustomTag key={index} backgroundColor={index === 0 ? "#E1EBFD" : "#F7F7F7"}>{tag}</CustomTag>
            ))}
          </TagContainer>
        </ActivityContents>
      </ActivityContainer>
    </CustomBox>
  );
};

export default ActivityBox;
