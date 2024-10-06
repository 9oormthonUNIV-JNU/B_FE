import styled from "styled-components";
import LookingBox from "../molecules/LookingBox";
import CustomText from "../atoms/CustomText";

const LookingBoxesContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
gap: 10px;
background-color:#F7F7F7;

.Box {
display: flex;
flex-direction: row;
width: 80%;
gap: 20px;
margin-bottom: 220px;
justify-content:center;


}

.Looking_content {
    margin: 60px 0px;
    padding: 80px;
  }

`

const LookingBoxes = () => {
return (
<LookingBoxesContainer>
    <div className="Looking_content ">
        <CustomText textStyle="h2">
        우리는 이런 분들을 찾고 있어요!
        </CustomText>
    </div>
    <div className="Box">
        <LookingBox title="01" content="스터디 및 세미나에 적극적으로 참여할 수 있는 분"/>
        <LookingBox title="02" content="서비스 개발 및 구현에 관심이 많으신 분"/>
        <LookingBox title="03" content="타 대학 친구들과 협업 경험을 쌓고 싶은신 분"/>
        <LookingBox title="04" content="개발 관련 이야기를 함께 나눌 사람을 찾고 계신 분"/>
        </div>
</LookingBoxesContainer>
);

};

export default LookingBoxes;