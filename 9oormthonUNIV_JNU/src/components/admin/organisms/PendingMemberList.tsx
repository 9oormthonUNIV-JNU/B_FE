import PendingMemberItem from "../atoms/PendingMemberItem";
import CustomText from "../../common/atoms/CustomText";
import { MemberList, MemberListContainer } from "../molecules/ListContainer";

type Member = {
  userId: string;
  name: string;
  email: string;
  createdAt: string;
};

type PendingMemberListProps = {
  members: Member[];
  onRefresh: () => void;
};

const PendingMemberList: React.FC<PendingMemberListProps> = ({
  members,
  onRefresh,
}) => {
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
            userId={member.userId}
            name={member.name}
            email={member.email}
            createdAt={member.createdAt}
            onRefresh={onRefresh}
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default PendingMemberList;
