import PendingMemberItem from "../atoms/PendingMemberItem";
import CustomText from "../../common/atoms/CustomText";
import { MemberList, MemberListContainer } from "../molecules/ListContainer";

const PendingMemberList = () => {
  const members: {
    name: string;
    email: string;
    applicationDate: string;
  }[] = [
    {
      name: "최지원",
      email: "email1@email.com",
      applicationDate: "2024. 09. 09",
    },
    {
      name: "김민수",
      email: "email2@email.com",
      applicationDate: "2024. 09. 10",
    },
    {
      name: "박수현",
      email: "email3@email.com",
      applicationDate: "2024. 09. 11",
    },
    {
      name: "이수빈",
      email: "email4@email.com",
      applicationDate: "2024. 09. 12",
    },
  ];

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
