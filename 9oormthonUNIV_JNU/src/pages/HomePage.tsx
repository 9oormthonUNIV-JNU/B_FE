
import CustomText from "../components/common/atoms/CustomText";
import styled from "styled-components";
import IntroductionBoxes from "../components/common/organisms/IntroductionBoxes";
import HomeBar from "../components/common/organisms/HomeBar";
import icon_pencil from "../assets/images/icon_pencil.svg";
import icon_book from "../assets/images/icon_book.svg";
import icon_networking from "../assets/images/icon_networking.svg";
import icon_notebook from "../assets/images/icon_notebook.svg";
import img_flower from "../assets/images/img_flower.svg";
import icon_pin from "../assets/images/icon_pin.svg";
import icon_lightning from "../assets/images/icon_lightning.svg";
import icon_glitter from "../assets/images/icon_glitter.svg";
import icon_party from "../assets/images/icon_party.svg";

const MainContainer = styled.div`
display: flex;
width:100%;
flex-direction: column;
`
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


const CampusIntroductionData = [
    {
      icon: icon_pencil,
      subject: "스터디 Study",
      contents: "교내 미르미들과 자유롭게 스터디를 진행하고 있습니다. 중앙 행사에 참여하는 모든 미르미들에게는 구름 IDE/EDU 및 인프런 쿠폰을 제공해드려요!",
      image: img_flower,
    },
    {
      icon: icon_book,
      subject: "세미나 Seminar",
      contents: "매주 목요일 19시 30분에 모여 지난 주에 진행한 스터디 내용 및 프로젝트를 발표하고 서로의 생각을 공유하는 시간을 갖고 있어요.",
      image: img_flower,
    },
    {
      icon: icon_notebook,
      subject: "프로젝트 Project",
      contents: "팀을 구성하여 아이디어를 선정하고 기획/디자인 후 개발한 프로젝트는 매주 정기 세미나를 통해 진행 상황을 발표하고 피드백을 받으며 보다 좋은 결과물을 얻어냅니다.",
      image: img_flower,
    },
    {
      icon: icon_networking,
      subject: "네트워킹 Networking",
      contents: "교내 활동에 참여하는 미르미들과의 네트워킹 시간을 통해 서로의 경험과 관심사를 공유합니다.",
      image: img_flower,
    },
  ];

  
const ExtracurricularIntroductionData = [
    {
      icon: icon_pin,
      subject: "온보딩 Onboarding",
      contents: "해커톤 시작 전, 해커톤에 대해 알아보는 행사입니다. 온보딩에서는 다양한 연사자분께서 협업에 대해 알려주시고, 해커톤에 대해 다양한 인사이트를 얻어갈 수 있습니다.",
      image: img_flower,
    },
    {
      icon: icon_lightning,
      subject: "단풍톤 DANPOONG",
      contents: "기획 1명, 디자인 1명, 프론트엔드 2명, 백엔드 2명 총 6명이 하나의 팀을 구성하여 해커톤 기간까지 기획과 디자인 및 개발을 하게 됩니다.",
      image: img_flower,
    },
    {
      icon: icon_glitter,
      subject: "연합 행사 Union Event",
      contents: "본 해커톤이 끝난 후 2개 이상의 유니브가 모여 연합 해커톤 세미나를 진행하여 타 대학과 네트워킹을 할 수 있는 시간을 가질 수 있습니다.",
      image: img_flower,
    },
    {
      icon: icon_party,
      subject: "",
      contents: "",
      image: img_flower,
    },
  ];


const HomePage = () => {
    return (
        <>
           <MainContainer>
            <FirstContainer>
                <CustomText weight={600}  size={64}>
                    구름톤 유니브 전남대
                </CustomText>
                <CustomText weight={500} size={36}>
                구름톤 유니브는 goorm과 kakao에서 후원하는 전국 IT연합 동아리로,
                전남대학교는 구름톤 유니브에 2기부터 함께하게 되었습니다. 
                </CustomText>
                </FirstContainer>
                <SecondContainer>
                <CustomText weight={600} size={64}>
                구름톤 유니브 전남대만의 활동
                </CustomText>
                <Spacer/>
                <HomeBar>교내활동</HomeBar>
                <IntroductionBoxes introductionData={CampusIntroductionData}/>
                <HomeBar>교외활동</HomeBar>
                <IntroductionBoxes introductionData={ExtracurricularIntroductionData}/> 
                </SecondContainer>
            </MainContainer>

        </>
      );

};

export default HomePage;
