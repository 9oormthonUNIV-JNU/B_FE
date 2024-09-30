import { MemberListContainer, MemberList } from "../molecules/ListContainer";
import ApprovedMemberItem from "../atoms/ApprovedMemberItem";
import CustomText from "../../common/atoms/CustomText";

const ApprovedMemberList = () => {
  const members: {
    name: string;
    email: string;
    generation: number;
    part: "PD" | "PM" | "FE" | "BE";
  }[] = [
    {
      name: "최지원",
      email: "email1@email.com",
      generation: 3,
      part: "PD",
    },
    {
      name: "김민수",
      email: "email2@email.com",
      generation: 3,
      part: "PM",
    },
    {
      name: "박수현",
      email: "email3@email.com",
      generation: 3,
      part: "FE",
    },
    {
      name: "이수빈",
      email: "email4@email.com",
      generation: 3,
      part: "BE",
    },
  ];

  return (
    <MemberListContainer>
      <div className="memberlist">
        <CustomText textStyle="b1">회원 목록</CustomText>
      </div>
      <MemberList>
        {members.map((member) => (
          <ApprovedMemberItem
            key={member.email}
            name={member.name}
            email={member.email}
            generation={member.generation}
            part={member.part}
          />
        ))}
      </MemberList>
    </MemberListContainer>
  );
};

export default ApprovedMemberList;
