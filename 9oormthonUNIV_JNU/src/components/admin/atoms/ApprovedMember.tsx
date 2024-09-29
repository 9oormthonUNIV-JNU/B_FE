import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import icon_kebab from "../../../assets/images/icon_kebab.svg";

const ApprovedMemberContainer = styled.div`
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

const ApprovedMember = () => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);

  const toggleKebab = () => {
    setIsKebabOpen(!isKebabOpen);
  };

  const handleDeleteClick = () => {
    // 확인 대화 상자를 띄워서 사용자가 "확인"을 눌렀을 때만 삭제 동작 실행
    const isConfirmed = window.confirm("회원을 삭제하시겠습니까?");
    if (isConfirmed) {
      // 실제 삭제 로직을 추가
      alert("회원이 삭제되었습니다."); // 확인용 로그, 실제로는 삭제 로직 수행
    }
  };

  return (
    <ApprovedMemberContainer>
      <div className="approved_name">
        <div>
          <CustomText textStyle="b2">최지원 {""}</CustomText>
          <CustomText textStyle="b2" color="#ABABAB">
            (email@email.com)
          </CustomText>
        </div>
        <div className="approved_kebab" onClick={toggleKebab}>
          <img src={icon_kebab} alt="kebab menu" />
        </div>
      </div>
      <div className="tag_and_delete_container">
        <div className="approved_tag_container">
          <CustomTag backgroundColor="#E1EBFD">3기</CustomTag>
          <CustomTag backgroundColor="#F7F7F7">PM</CustomTag>
        </div>
        {isKebabOpen && (
          <CustomTag
            onClick={handleDeleteClick}
            backgroundColor="#F7F7F7"
            color="#FF6D57"
          >
            회원 삭제
          </CustomTag>
        )}
      </div>
    </ApprovedMemberContainer>
  );
};

export default ApprovedMember;
