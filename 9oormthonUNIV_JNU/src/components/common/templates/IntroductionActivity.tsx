import CustomText from "../atoms/CustomText";
import styled from "styled-components";
import HomeBar from "../organisms/HomeBar";
import IntroductionBoxes from "../organisms/IntroductionBoxes";
import {
  CampusIntroductionData,
  ExtracurricularIntroductionData,
} from "../../../constants/IntrouctionList";

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 80px;

  .activity_content {
    padding: 80px;
  }
`;

const IntroductionActivity = () => {
  return (
    <IntroductionContainer>
      <div className="activity_content">
        <CustomText textStyle="h1">구름톤 유니브 전남대만의 활동</CustomText>
      </div>
      <HomeBar>교내활동</HomeBar>
      <IntroductionBoxes introductionData={CampusIntroductionData} />
      <HomeBar>교외활동</HomeBar>
      <IntroductionBoxes introductionData={ExtracurricularIntroductionData} />
    </IntroductionContainer>
  );
};
export default IntroductionActivity;
