import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import styled from "styled-components";
import { instance } from "../../../apis/instance";

const PendingMemberItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 512px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #ababab;
  border-radius: 20px;
  padding: 20px 25px;
  gap: 10px;

  .pending_button_container {
    display: flex;
    gap: 10px;
  }

  .pending_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

type PendingMemberItemProps = {
  name: string;
  email: string;
  createdAt: string;
  userId: string;
  onRefresh: () => void;
};

const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const PendingMemberItem: React.FC<PendingMemberItemProps> = ({
  name,
  email,
  createdAt,
  userId,
  onRefresh,
}) => {
  // 승인 API 요청
  const approveMember = async () => {
    const isConfirmed = window.confirm("정말로 승인하시겠습니까?");
    if (!isConfirmed) return;

    try {
      const response = await instance.post(`/api/user/approval/${userId}`);
      if (response.data.status === "success") {
        alert("승인되었습니다.");
        onRefresh();
      }
    } catch (error) {
      console.error("승인 요청 중 오류 발생:", error);
      alert("승인에 실패했습니다.");
    }
  };

  // 거절 API 요청
  const rejectMember = async () => {
    const isConfirmed = window.confirm("정말로 거절하시겠습니까?");
    if (!isConfirmed) return;

    try {
      const response = await instance.post(`/api/user/rejection/${userId}`);
      if (response.data.status === "success") {
        alert("거절되었습니다.");
        onRefresh();
      }
    } catch (error) {
      console.error("거절 요청 중 오류 발생:", error);
      alert("거절에 실패했습니다.");
    }
  };

  return (
    <PendingMemberItemContainer>
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
      <div className="pending_bottom">
        <CustomText textStyle="b3">신청일 : {formatDate(createdAt)}</CustomText>
        <div className="pending_button_container">
          <CustomTag backgroundColor="#E1EBFD" onClick={approveMember}>
            승인
          </CustomTag>
          <CustomTag backgroundColor="#F7F7F7" onClick={rejectMember}>
            거절
          </CustomTag>
        </div>
      </div>
    </PendingMemberItemContainer>
  );
};

export default PendingMemberItem;
