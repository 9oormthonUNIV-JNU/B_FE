import styled from "styled-components";
import CustomBox from "../atoms/CustomBox";
import CustomText from "../atoms/CustomText";
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

type MemberBoxProps = {
  image: string;
  name: string;
  generation: number;
  part: "PM" | "PD" | "FE" | "BE";
};

const MemberBox: React.FC<MemberBoxProps> = ({
  image,
  name,
  generation,
  part,
}) => {
  return (
    <CustomBox width={320} height={470}>
      <MemberImage src={image} alt={name} />
      <MemberContents>
        <CustomText textStyle="b2">{name}</CustomText>
        <TagContainer>
          <CustomTag>{generation}기</CustomTag>
          <CustomTag>{part}</CustomTag>
        </TagContainer>
      </MemberContents>
    </CustomBox>
  );
};

export default MemberBox;
