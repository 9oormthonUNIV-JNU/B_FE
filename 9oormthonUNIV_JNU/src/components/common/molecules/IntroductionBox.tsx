import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import icon_pencil from "../../../assets/images/icon_pencil.svg";
import img_flower from "../../../assets/images/img_flower.svg";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 463px;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 18px;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  .activity_contents {
    padding: 25px 25px 35px 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
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
    <>
      <div className="activity_contents">
        <div style={{ display: "flex", gap: "10px" }}>
          <img src={icon} />
          <CustomText size={32} weight={600}>
            {subject}
          </CustomText>
        </div>
        <CustomText size={20} weight={500}>
          {contents}
        </CustomText>
      </div>
      <img src={image} style={{ width: "100%" }} />
    </>
  );
};

const IntroductionBox = () => {
  return (
    <BoxContainer>
      <Activity
        icon={icon_pencil}
        subject="스터디 Study"
        contents="교내 미르미들과 자유롭게 스터디를 진행하고 있습니다. 중앙 행사에 참여하는 모든 미르미들에게는 구름 IDE/EDU 및 인프런 쿠폰을 제공해드려요!"
        image={img_flower}
      />
    </BoxContainer>
  );
};

export default IntroductionBox;
