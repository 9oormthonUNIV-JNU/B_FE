import PendingMemberList from "../organisms/PendingMemberList";
import ApprovedMemberList from "../organisms/ApprovedMemberList";
import styled from "styled-components";

const MemberManageContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

const MemberManage = () => {
  return (
    <div>
      <MemberManageContainer>
        <PendingMemberList />
        <ApprovedMemberList />
      </MemberManageContainer>
    </div>
  );
};

export default MemberManage;
