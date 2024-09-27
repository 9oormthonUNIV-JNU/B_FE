import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomBox from "../atoms/CustomBox";

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  box-sizing: border-box;
`;

const IntroductionContents = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  flex-grow: 1;
`;

const IntroductionImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  flex-shrink: 0;
  box-sizing: border-box;
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
    <CustomBox width={400} height={480} gap={10}>
      <IntroductionContainer>
        <IntroductionContents>
          <div style={{ display: "flex", gap: "10px" }}>
            <img src={icon} alt="icon" />
            <CustomText textStyle="h3">{subject}</CustomText>
          </div>
          <CustomText textStyle="b3" line={30}>
            {contents}
          </CustomText>
        </IntroductionContents>
        <IntroductionImage src={image} alt="introduction" />
      </IntroductionContainer>
    </CustomBox>
  );
};

export default IntroductionBox;
