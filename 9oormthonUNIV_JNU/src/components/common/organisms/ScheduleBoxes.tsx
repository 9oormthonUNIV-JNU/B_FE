import ScheduleBox from "../molecules/ScheduleBox";
import styled from "styled-components";

const ScheduleBoxesContainer = styled.div`
 position: relative;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
   margin-bottom:286px;
  `;

const ScheduleLineContainer = styled.div`
  position: absolute;
  top: 75px;
  width:100%;
 height: 2px;
 background-color: #384356;
`

const ScheduleBoxes: React.FC<{
    ScheduleData?: Array<{
    task: string;
    date: string;
  }>;
}> = ({ ScheduleData }) => {
  if (!ScheduleData || ScheduleData.length === 0) {
    return null;
  }

  return (
    <ScheduleBoxesContainer>
        <ScheduleLineContainer/>
         
      {ScheduleData.map((data, index) => (
        <ScheduleBox
          key={index}
          task={data.task}
          date={data.date}
        />
      ))}
    </ScheduleBoxesContainer>
  );
};

export default ScheduleBoxes;
