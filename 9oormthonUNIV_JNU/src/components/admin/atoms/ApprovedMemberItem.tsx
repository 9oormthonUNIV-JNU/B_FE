import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";

const ApprovedMemberItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #ababab;
  border-radius: 20px;
  padding: 20px 25px;
  gap: 15px;

  .approved_name {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .approved_kebab {
    cursor: pointer;
  }

  .approved_tag_container {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tag_and_delete_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

type ApprovedMemberItemProps = {
  userId: number;
  name: string;
  email: string;
  cardinal: number;
  part: "PM" | "PD" | "FE" | "BE";
  onDelete: (userId: number) => void;
};

const ApprovedMemberItem: React.FC<ApprovedMemberItemProps> = ({
  userId,
  name,
  email,
  cardinal,
  part,
  onDelete,
}) => {
  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(`${name} 회원을 삭제하시겠습니까?`);
    if (isConfirmed) {
      onDelete(userId);
    }
  };

  return (
    <ApprovedMemberItemContainer>
      <div className="approved_name">
        <div>
          <CustomText textStyle="b2">
            {name} {""}
          </CustomText>
          <CustomText textStyle="b2" color="#ABABAB">
            {"("}
            {email}
            {")"}
          </CustomText>
        </div>
      </div>
      <div className="tag_and_delete_container">
        <div className="approved_tag_container">
          <CustomTag backgroundColor="#E1EBFD">{cardinal}기</CustomTag>
          <CustomTag backgroundColor="#F7F7F7">{part}</CustomTag>
        </div>
        <CustomTag
          onClick={handleDeleteClick}
          backgroundColor="#F7F7F7"
          color="#FF6D57"
        >
          회원 삭제
        </CustomTag>
      </div>
    </ApprovedMemberItemContainer>
  );
};

export default ApprovedMemberItem;
