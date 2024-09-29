import AdminCalendar from "../organisms/AdminCalendar";
import styled from "styled-components";

const ScheduleManageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto 130px;
`;

const ScheduleManage = () => {
  return (
    <ScheduleManageContainer>
      <AdminCalendar />
    </ScheduleManageContainer>
  );
};

export default ScheduleManage;
