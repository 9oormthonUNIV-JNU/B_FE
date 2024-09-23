import styled from "styled-components";
import CustomBox from "../atoms/CustomBox";
import CustomText from "../atoms/CustomText";
import img_flower from "../../../assets/images/img_flower.svg";
import CustomTag from "../atoms/CustomTag";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

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

type MemberProps = {
  name: string;
  generation: number;
  part: "PM" | "PD" | "FE" | "BE";
  image: string;
};

const Member: React.FC<MemberProps> = ({ image, name, generation, part }) => {
  return (
    <MemberContainer>
      <MemberImage src={image} />
      <MemberContents>
        <CustomText weight={500} size={28}>
          {name}
        </CustomText>
        <TagContainer>
          <CustomTag>{generation}기</CustomTag>
          <CustomTag>{part}</CustomTag>
        </TagContainer>
      </MemberContents>
    </MemberContainer>
  );
};

const MemberBox = () => {
  return (
    <CustomBox width={320} height={470}>
      <Member image={img_flower} name="최지원" generation={2} part="PD" />
    </CustomBox>
  );
};

export default MemberBox;
