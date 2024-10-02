import styled from "styled-components";
import MemberBox from "../molecules/MemberBox";

const MemberBoxesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin: 100px 200px;
  justify-items: center;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 100px auto;
`;

const MemberBoxes: React.FC<{
  MemberData?: Array<{
    image: string;
    name: string;
    generations: number[];
    part: "PM" | "PD" | "FE" | "BE";
  }>;
}> = ({ MemberData }) => {
  if (!MemberData || MemberData.length === 0) {
    return null;
  }

  return (
    <MemberBoxesContainer>
      {MemberData.map((data, index) => (
        <MemberBox
          key={index}
          image={data.image}
          name={data.name}
          generations={data.generations}
          part={data.part}
        />
      ))}
    </MemberBoxesContainer>
  );
};

export default MemberBoxes;
