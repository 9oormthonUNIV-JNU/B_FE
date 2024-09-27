import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomBox from "../atoms/CustomBox";

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const IntroductionContents = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const IntroductionImage = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
`;

type IntroductionBoxProps = {
  icon: string;
  subject: string;
  contents: string;
  image: string;
};

const IntroductionBox: React.FC<IntroductionBoxProps> = ({
  icon,
  subject,
  contents,
  image,
}) => {
  return (
    <CustomBox width={400} height={463} gap={10}>
      <IntroductionContainer>
        <IntroductionContents>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={icon} />
            <CustomText textStyle="h3">{subject}</CustomText>
          </div>
          <CustomText textStyle="b3">{contents}</CustomText>
        </IntroductionContents>
        <IntroductionImage src={image} />
      </IntroductionContainer>
    </CustomBox>
  );
};

export default IntroductionBox;
