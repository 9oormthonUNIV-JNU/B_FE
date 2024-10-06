import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import RecruitBox from "../molecules/RecruitBox";
import RecruitArcodions from "../molecules/RecruitArcordions";
import LookingBoxes from "../organisms/LookingBoxes";
import InquiryBoxes from "../organisms/InquiryBoxes";

const RecruitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

    .Recruit_content {
    margin: 60px 0px;
    padding: 80px;
    margin-bottom: 0px;
  }

`
const Recruit = () => {
    const RecruitData = [
        { title: "2기 모집글 확인하기", content: "2기모집글 내용입니다." },
        { title: "3기 모집글 확인하기", content: "3기모집글 내용입니다." },
      ];
      
      const FAQData = [
        { title: "프로젝트 경험이 없어도 되나요?", content: "프로젝트 경험" },
        { title: "개발 파트로 지원 시, 기술 면접을 보나요?", content: "기술 면접" },
        { title: "합격자만 연락을 받게 되나요?", content: "합격자 연락" },
      ];

    return (
        <RecruitContainer>
            <div className="Recruit_content">
                <CustomText textStyle="h1">
                    Recruit
                </CustomText>
            </div>
            
            <RecruitBox />

            <div className="Recruit_content">
                <CustomText textStyle="h2">
                이전 모집 공고글 확인하기
                </CustomText>
            </div>
            <RecruitArcodions data={RecruitData} />

            <LookingBoxes/>
            
            <div className="Recruit_content">
                <CustomText textStyle="h2">
                FAQ
                </CustomText>
            </div>

            <RecruitArcodions data={FAQData} />

            <div className="Recruit_content">
                <CustomText textStyle="h2">
                문의하기
                </CustomText>
            </div>
<InquiryBoxes/>
        </RecruitContainer>

    );
};

export default Recruit;