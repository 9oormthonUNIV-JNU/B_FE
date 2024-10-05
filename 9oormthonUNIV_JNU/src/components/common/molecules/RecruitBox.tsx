import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const RecruitBoxContainer = styled.div`
display: flex;
flex-direction: column;
width:100%;
justify-content: center;
align-items: center;

`
const TextBox = styled.div`
display: inline-flex;
width:50%;
padding: 48px 74px 49px 74px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
border-radius: 50px;
background-color:#F7F7F7;
text-align: center;
margin-bottom: 100px;
`
const RecruitBox = () => {
return (
<RecruitBoxContainer>
   <TextBox>
    <CustomText textStyle="h2">
    지금은 지원 기간이 아닙니다.
    </CustomText>
   
    <CustomText textStyle="b3" line={30}>
    매년 학기 시작 전(2월 및 8월)에 신입 미르미를 모집하고 있습니다.<br/>
    구름톤 유니브 전남대학교 공식 웹사이트 및 인스타그램과 에브리타임 등에서 모집 일정을 확인할 수 있습니다.
    </CustomText>
    </TextBox>
</RecruitBoxContainer>
);

};

export default RecruitBox;