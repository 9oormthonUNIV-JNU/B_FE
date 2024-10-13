import { MemberListContainer, MemberList } from "../molecules/ListContainer";
import ApprovedMemberItem from "../atoms/ApprovedMemberItem";
import CustomText from "../../common/atoms/CustomText";

type Member = {
  userId: number;
  name: string;
  email: string;
  cardinal: number;
  part: "PD" | "PM" | "FE" | "BE";
};

type ApprovedMemberListProps = {
  members: Member[];
  onRefresh: () => void;
};

const ApprovedMemberList: React.FC<ApprovedMemberListProps> = ({
  members,
  onRefresh,
}) => {
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
            key={member.userId}
            userId={member.userId}
            name={member.name}
            email={member.email}
            cardinal={member.cardinal}
            part={member.part}
            onRefresh={onRefresh}
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default ApprovedMemberList;