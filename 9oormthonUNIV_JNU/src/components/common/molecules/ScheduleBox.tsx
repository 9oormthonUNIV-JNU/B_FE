import schedule_icon from "../../../assets/images/schedule_icon.svg"
import styled from "styled-components"
import CustomText from "../atoms/CustomText";

const ScheduleBoxContainer = styled.div`
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;

`
type ScheduleBoxProps = {
    task: string;
    date: string;
  };

const ScheduleBox: React.FC<ScheduleBoxProps>= ({task, date}) => {
    return(
        <ScheduleBoxContainer>
        <CustomText textStyle="b2">{task}</CustomText>
        <img src={schedule_icon}/>
        <CustomText textStyle="b2">{date}</CustomText>
        </ScheduleBoxContainer>
    );
 };

 export default ScheduleBox;