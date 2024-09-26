import IntroductionBox from "../molecules/IntroductionBox";
import styled from "styled-components";

const IntroductionBoxesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 53px;
  padding: 80px;
  padding-bottom: 112px;
`;

// IntroductionBoxes 컴포넌트
const IntroductionBoxes: React.FC<{ introductionData?: Array<{ icon: string; subject: string; contents: string; image: string }> }> = ({ introductionData }) => {
  if (!introductionData || introductionData.length === 0) {
    return null; // 데이터가 없을 경우 아무것도 렌더링하지 않음
  }

  return (
    <IntroductionBoxesContainer>
      {introductionData.map((data, index) => (
        <IntroductionBox
          key={index}
          icon={data.icon}
          subject={data.subject}
          contents={data.contents}
          image={data.image}
        />
      ))}
    </IntroductionBoxesContainer>
  );
};

export default IntroductionBoxes;
