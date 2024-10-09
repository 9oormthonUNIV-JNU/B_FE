import { MemberListContainer, MemberList } from "../molecules/ListContainer";
import ApprovedMemberItem from "../atoms/ApprovedMemberItem";
import CustomText from "../../common/atoms/CustomText";
import { instance } from "../../../apis/instance";
import { useEffect, useState } from "react";

type Member = {
  user_id: number;
  name: string;
  email: string;
  cardinal: number;
  part: "PD" | "PM" | "FE" | "BE";
};

const ApprovedMemberList = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchApprovedMembers = async () => {
      try {
        const response = await instance.get("/api/admin/state");
        const approvedList = response.data.response.ApprovedList;
        setMembers(approvedList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApprovedMembers();
  }, []);

  const handleDeleteMember = async (userId: number) => {
    try {
      const response = await instance.delete(`/api/user/approval/${userId}`);
      if (response.data.status === "success") {
        alert("회원이 삭제되었습니다.");
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.user_id !== userId)
        );
      }
    } catch (error) {
      console.error("회원 삭제 실패", error);
    }
  };

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
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default ApprovedMemberList;
