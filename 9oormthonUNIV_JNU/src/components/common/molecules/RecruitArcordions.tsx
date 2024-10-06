import styled from "styled-components";
import Arcordion from "../atoms/Arcordion";

const RecruitArcodionsContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 27px 32px;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

type DataItem = {
  title: string;
  content: string;
};

type RecruitArcodionsProps = {
  data: DataItem[];
};

const RecruitArcodions: React.FC<RecruitArcodionsProps> = ({ data }) => {
  return (
    <RecruitArcodionsContainer>
      {data.map((item, index) => (
        <Arcordion key={index} title={item.title}>
          {item.content}
        </Arcordion>
      ))}
    </RecruitArcodionsContainer>
  );
};

export default RecruitArcodions;
