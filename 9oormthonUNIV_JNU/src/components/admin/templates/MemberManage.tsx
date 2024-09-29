import PendingMemberList from "../organisms/PendingMemberList";
import ApprovedMemberList from "../organisms/ApprovedMemberList";
import styled from "styled-components";

const MemberManageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 130px;
`;

const MemeberManage = () => {
  return (
    <div>
      <MemberManageContainer>
        <PendingMemberList />
        <ApprovedMemberList />
      </MemberManageContainer>
    </div>
  );
};

export default MemeberManage;
