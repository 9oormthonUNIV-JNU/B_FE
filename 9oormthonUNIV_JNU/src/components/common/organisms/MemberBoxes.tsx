import styled from "styled-components";
import MemberBox from "../molecules/MemberBox";
import CustomText from "../atoms/CustomText";

// 스타일 컴포넌트 정의
const MemberBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin: 100px 200px;
  justify-items: center;
  box-sizing: border-box;
  padding-left: 100px;
  padding-right: 100px;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
`;

interface MemberData {
  imageURL: string;
  name: string;
  cardinals: number[];
  part: "PM" | "PD" | "FE" | "BE";
}

const MemberBoxes: React.FC<{ MemberData?: MemberData[] }> = ({ MemberData }) => {
  if (!MemberData || MemberData.length === 0) {
    return (
      <EmptyStateContainer>
        <CustomText textStyle="b3" color="#D8D8D8">
          선택된 조건에 해당하는 멤버가 없습니다.
        </CustomText>
      </EmptyStateContainer>
    );
  }

  return (
    <MemberBoxesContainer>
      {MemberData.map((data, index) => (
        <MemberBox
          key={index}
          image={data.imageURL}
          name={data.name}
          cardinals={data.cardinals}
          part={data.part}
        />
      ))}
    </MemberBoxesContainer>
  );
};

export default MemberBoxes;
