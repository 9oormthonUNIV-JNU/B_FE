import IntroductionBox from "../molecules/IntroductionBox";
import styled from "styled-components";

const IntroductionBoxesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
  padding: 80px 0px;
`;

const IntroductionBoxes: React.FC<{
  introductionData?: Array<{
    icon: string;
    subject: string;
    contents: string;
    image: string;
  }>;
}> = ({ introductionData }) => {
  if (!introductionData || introductionData.length === 0) {
    return null;
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
