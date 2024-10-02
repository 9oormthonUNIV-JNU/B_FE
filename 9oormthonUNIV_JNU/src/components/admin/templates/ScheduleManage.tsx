import AdminCalendar from "../organisms/AdminCalendar";
import styled from "styled-components";

const ScheduleManageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ScheduleManage = () => {
  return (
    <ScheduleManageContainer>
      <AdminCalendar />
    </ScheduleManageContainer>
  );
};

export default ScheduleManage;
