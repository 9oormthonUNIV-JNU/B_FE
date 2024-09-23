import styled from "styled-components";
import CustomBox from "../atoms/CustomBox";
import CustomText from "../atoms/CustomText";
import img_flower from "../../../assets/images/img_flower.svg";
import CustomTag from "../atoms/CustomTag";

const MemberImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const MemberContents = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const MemberBox = () => {
  return (
    <CustomBox width={320} height={470}>
      <MemberImage src={img_flower} />
      <MemberContents>
        <CustomText weight={500} size={28}>
          최지원
        </CustomText>
        <TagContainer>
          <CustomTag>2기</CustomTag>
          <CustomTag>3기</CustomTag>
          <CustomTag>PD</CustomTag>
        </TagContainer>
      </MemberContents>
    </CustomBox>
  );
};

export default MemberBox;
