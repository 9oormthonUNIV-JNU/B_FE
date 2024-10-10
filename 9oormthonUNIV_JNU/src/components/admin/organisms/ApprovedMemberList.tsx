import React, { useEffect, useState } from "react";
import { MemberListContainer, MemberList } from "../molecules/ListContainer";
import ApprovedMemberItem from "../atoms/ApprovedMemberItem";
import CustomText from "../../common/atoms/CustomText";
import { instance } from "../../../apis/instance";

type Member = {
  user_id: number;
  name: string;
  email: string;
  cardinal: number;
  part: "PD" | "PM" | "FE" | "BE";
};

const ApprovedMemberList = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const fetchApprovedMembers = async () => {
      try {
        const response = await instance.get("/api/admin/state");
        const approvedList = response.data.response?.ApprovedList || [];
        setMembers(approvedList);
      } catch (error) {
        console.error("회원 목록을 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false); // 데이터 로드 완료 시 로딩 상태 해제
      }
    };

    fetchApprovedMembers();
  }, []);

  const handleDeleteMember = async (userId: number) => {
    const isConfirmed = window.confirm("정말로 이 회원을 삭제하시겠습니까?");
    if (!isConfirmed) return;

    setDeleting(true); // 삭제 중 상태 설정
    try {
      const response = await instance.delete(`/api/user/approval/${userId}`);
      if (response.data.status === "success") {
        alert("회원이 삭제되었습니다.");
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.user_id !== userId)
        );
      } else {
        alert("회원 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("회원 삭제 실패", error);
      alert("삭제 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setDeleting(false); // 삭제 완료 후 상태 해제
    }
  };

  if (loading) {
    return (
      <MemberListContainer>
        <div className="memberlist">
          <CustomText textStyle="b1">회원 목록</CustomText>
        </div>
        <div className="loading">
          <CustomText textStyle="b3">
            회원 목록을 불러오는 중입니다...
          </CustomText>
        </div>
      </MemberListContainer>
    );
  }

  if (members.length === 0) {
    return (
      <MemberListContainer>
        <div className="memberlist">
          <CustomText textStyle="b1">회원 목록</CustomText>
        </div>
        <div className="pending_none">
          <CustomText textStyle="b3">승인 완료된 회원이 없습니다.</CustomText>
        </div>
      </MemberListContainer>
    );
  }

  return (
    <MemberListContainer>
      <div className="memberlist">
        <CustomText textStyle="b1">회원 목록</CustomText>
      </div>
      <MemberList>
        {members.map((member) => (
          <ApprovedMemberItem
            key={member.user_id}
            userId={member.user_id}
            name={member.name}
            email={member.email}
            cardinal={member.cardinal}
            part={member.part}
            onDelete={handleDeleteMember}
            isDeleting={deleting}
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default ApprovedMemberList;
