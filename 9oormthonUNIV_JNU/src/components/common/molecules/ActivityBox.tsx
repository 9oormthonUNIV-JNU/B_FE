import styled from "styled-components";
import CustomBox from "../atoms/CustomBox";
import CustomTag from "../atoms/CustomTag";
import CustomText from "../atoms/CustomText";
import img_flower from "../../../assets/images/img_flower.svg";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

type ActivityProps = {
  image: string;
  subject: string;
  tag: string;
};

const Activity: React.FC<ActivityProps> = ({ image, subject, tag }) => {
  return (
    <ActivityContainer>
      <ActivityImage src={image} />
      <ActivityContents>
        <CustomText weight={500} size={28}>
          {subject}
        </CustomText>
        <TagContainer>
          <CustomTag>{tag}</CustomTag>
        </TagContainer>
      </ActivityContents>
    </ActivityContainer>
  );
};

const ActivityBox = () => {
  return (
    <CustomBox width={480} height={376}>
      <Activity
        image={img_flower}
        subject="대학생을 위한 밤샘서비스 '자니'"
        tag="해커톤"
      />
    </CustomBox>
  );
};

export default ActivityBox;
