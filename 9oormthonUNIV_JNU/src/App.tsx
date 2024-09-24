import FilterButton from "./components/common/atoms/FilterButton";
import LabelButton from "./components/common/atoms/LabelButton";
import Header from "./components/common/organisms/Header";
import Footer from "./components/common/organisms/Footer";
import ActivityBox from "./components/common/molecules/ActivityBox";
import IntroductionBox from "./components/common/molecules/IntroductionBox";
import MemberBox from "./components/common/molecules/MemberBox";
import styled from "styled-components";
import icon_pencil from "../src/assets/images/icon_pencil.svg";
import img_flower from "../src/assets/images/img_flower.svg";

const MainContainer = styled.div`
  flex-direction: column;
  padding: 100px 100px;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 336px;
`;

const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <FilterButton />
        <LabelButton label="교내 리크루팅" />
        <IntroductionBox
          icon={icon_pencil}
          subject="스터디 Study"
          contents="교내 미르미들과 자유롭게 스터디를 진행하고 있습니다. 중앙 행사에 참여하는 모든 미르미들에게는 구름 IDE/EDU 및 인프런 쿠폰을 제공해드려요!"
          image={img_flower}
        />
        <MemberBox image={img_flower} name="최지원" generation={2} part="PD" />
        <ActivityBox
          image={img_flower}
          subject="대학생을 위한 밤샘 서비스 '자니'"
          tag="해커톤"
        />
      </MainContainer>
      <Footer />
    </>
  );
};

export default App;
