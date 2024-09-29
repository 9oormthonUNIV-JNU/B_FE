import PendingMemberList from "../organisms/PendingMemberList";
import ApprovedMemberList from "../organisms/ApprovedMemberList";
import styled from "styled-components";

const MemberManage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 130px;
`;

const MemeberManage = () => {
  return (
    <div>
      <MemberManage>
        <PendingMemberList />
        <ApprovedMemberList />
      </MemberManage>
    </div>
  );
};

export default MemeberManage;
