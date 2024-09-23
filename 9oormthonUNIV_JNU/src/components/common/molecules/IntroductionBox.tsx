import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomBox from "../atoms/CustomBox";
import icon_pencil from "../../../assets/images/icon_pencil.svg";
import img_flower from "../../../assets/images/img_flower.svg";

const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ActivityContents = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const ActivityImage = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
`;

type ActivityProps = {
  icon: string;
  subject: string;
  contents: string;
  image: string;
};

const Activity: React.FC<ActivityProps> = ({
  icon,
  subject,
  contents,
  image,
}) => {
  return (
    <ActivityContainer>
      <ActivityContents>
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={icon} />
          <CustomText size={32} weight={600}>
            {subject}
          </CustomText>
        </div>
        <CustomText size={20} weight={500} line={30}>
          {contents}
        </CustomText>
      </ActivityContents>
      <ActivityImage src={image} />
    </ActivityContainer>
  );
};

const IntroductionBox = () => {
  return (
    <CustomBox width={400} height={463} gap={10}>
      <Activity
        icon={icon_pencil}
        subject="스터디 Study"
        contents="교내 미르미들과 자유롭게 스터디를 진행하고 있습니다. 중앙 행사에 참여하는 모든 미르미들에게는 구름 IDE/EDU 및 인프런 쿠폰을 제공해드려요!"
        image={img_flower}
      />
    </CustomBox>
  );
};

export default IntroductionBox;
