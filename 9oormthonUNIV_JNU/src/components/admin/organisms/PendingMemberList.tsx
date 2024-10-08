import PendingMemberItem from "../atoms/PendingMemberItem";
import CustomText from "../../common/atoms/CustomText";
import { MemberList, MemberListContainer } from "../molecules/ListContainer";
import { instance } from "../../../apis/instance";
import { useState, useEffect } from "react";

type Member = {
  name: string;
  email: string;
  applicationDate: string;
};

const PendingMemberList = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await instance.get("/api/admin/state");
        setMembers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  if (members.length === 0) {
    return (
      <MemberListContainer>
        <div className="memberlist">
          <CustomText textStyle="b1">승인 대기중인 회원</CustomText>
        </div>
        <div className="pending_none">
          <CustomText textStyle="b3">
            승인 대기 중인 회원이 없습니다.
          </CustomText>
        </div>
      </MemberListContainer>
    );
  }

  return (
    <MemberListContainer>
      <div className="memberlist">
        <CustomText textStyle="b1">승인 대기중인 회원</CustomText>
      </div>
      <MemberList>
        {members.map((member) => (
          <PendingMemberItem
            key={member.email}
            name={member.name}
            email={member.email}
            applicationDate={member.applicationDate}
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default PendingMemberList;
