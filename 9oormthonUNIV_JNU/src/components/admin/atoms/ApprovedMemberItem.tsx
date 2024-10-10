import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import { useState } from "react";
import { instance } from "../../../apis/instance";

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
  userId: string;
  name: string;
  email: string;
  cardinal: number;
  part: "PM" | "PD" | "FE" | "BE";
  onRefresh: () => void;
};

const ApprovedMemberItem: React.FC<ApprovedMemberItemProps> = ({
  userId,
  name,
  email,
  cardinal,
  part,
  onRefresh,
}) => {
  const [deleting, setDeleting] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    const isConfirmed = window.confirm(`${name} 회원을 삭제하시겠습니까?`);
    if (!isConfirmed) return;
    setDeleting(true);

    try {
      const response = await instance.delete(`/api/user/approval/${userId}`);
      if (response.data.status === "success") {
        alert("회원이 삭제되었습니다.");
        onRefresh();
      } else {
        alert("회원 삭제에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("회원 삭제 실패", error);
      alert("삭제 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <ApprovedMemberItemContainer>
      <div className="approved_name">
        <div>
          <CustomText textStyle="b2">{name}</CustomText>
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
          onClick={!deleting ? handleDeleteClick : undefined}
          backgroundColor="#F7F7F7"
          color="#FF6D57"
        >
          {deleting ? "삭제 중..." : "회원 삭제"}
        </CustomTag>
      </div>
    </ApprovedMemberItemContainer>
  );
};

export default ApprovedMemberItem;
