import CustomText from "../atoms/CustomText";
import styled from "styled-components";

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 150px 100px;
  gap: 30px;
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <CustomText textStyle="h1">구름톤 유니브 전남대</CustomText>
      <CustomText textStyle="b1" line={50}>
        구름톤 유니브는 goorm과 kakao에서 후원하는 전국 IT연합 동아리로,
        <br />
        전남대학교는 구름톤 유니브에 2기부터 함께하게 되었습니다.
      </CustomText>
    </IntroductionContainer>
  );
};

export default Introduction;
