import styled from "styled-components";
import IntroductionLogo from "../components/common/templates/IntroductionLogo";
import Introduction from "../components/common/templates/Introduction";
import IntroductionActivity from "../components/common/templates/IntroductionActivity";
import Schedule from "../components/common/templates/Schedule";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <MainContainer>
      <IntroductionLogo />
      <Introduction />
      <IntroductionActivity />
      <Schedule/>
    </MainContainer>
  );
};

export default HomePage;
