import PendingMemberList from "../organisms/PendingMemberList";
import ApprovedMemberList from "../organisms/ApprovedMemberList";
import styled from "styled-components";
import { instance } from "../../../apis/instance";
import { useEffect, useState } from "react";
import CustomText from "../../common/atoms/CustomText";

const MemberManageContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 55px;
`;

type PendingMember = {
  userId: number;
  name: string;
  email: string;
  createdAt: string;
};

type ApprovedMember = {
  userId: number;
  name: string;
  email: string;
  cardinal: number;
  part: "PD" | "PM" | "FE" | "BE";
};

const MemberManage = () => {
  const [pendingMembers, setPendingMembers] = useState<PendingMember[]>([]);
  const [approvedMembers, setApprovedMembers] = useState<ApprovedMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMembers = async () => {
    try {
      const response = await instance.get("/api/admin/state");
      const { PendingList, ApprovedList } = response.data.response;
      setPendingMembers(PendingList);
      setApprovedMembers(ApprovedList);
    } catch (error) {
      console.error("회원 목록을 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleRefresh = () => {
    fetchMembers();
  };

  if (loading) {
    return (
      <MemberManageContainer>
        <CustomText textStyle="b3">회원 목록을 불러오는 중입니다...</CustomText>
      </MemberManageContainer>
    );
  }

  return (
    <div>
      <MemberManageContainer>
        <PendingMemberList members={pendingMembers} onRefresh={handleRefresh} />
        <ApprovedMemberList
          members={approvedMembers}
          onRefresh={handleRefresh}
        />
      </MemberManageContainer>
    </div>
  );
};

export default MemberManage;