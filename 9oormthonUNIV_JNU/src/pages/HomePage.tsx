import CustomText from "../components/common/atoms/CustomText";
import styled from "styled-components";
import IntroductionBoxes from "../components/common/organisms/IntroductionBoxes";
import HomeBar from "../components/common/organisms/HomeBar";
import {
  CampusIntroductionData,
  ExtracurricularIntroductionData,
} from "../constants/List";
import IntroductionLogo from "../components/common/templates/IntroductionLogo";
import Introduction from "../components/common/templates/Introduction";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  height: 584px;
  padding: 242px 340px 143px 350px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  gap: 37px;
`;

const SecondContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 75px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

const Spacer = styled.div`
  height: 125px;
`;

const HomePage = () => {
  return (
    <MainContainer>
      <IntroductionLogo />
      <Introduction />
      <SecondContainer>
        <CustomText textStyle="h1">구름톤 유니브 전남대만의 활동</CustomText>
        <Spacer />
        <HomeBar>교내활동</HomeBar>
        <IntroductionBoxes introductionData={CampusIntroductionData} />
        <HomeBar>교외활동</HomeBar>
        <IntroductionBoxes introductionData={ExtracurricularIntroductionData} />
      </SecondContainer>
    </MainContainer>
  );
};

export default HomePage;
