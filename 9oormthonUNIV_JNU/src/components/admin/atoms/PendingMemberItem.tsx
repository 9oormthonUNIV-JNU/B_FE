import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import styled from "styled-components";

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
  applicationDate: string;
};

const PendingMemberItem: React.FC<PendingMemberItemProps> = ({
  name,
  email,
  applicationDate,
}) => {
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
        <CustomText textStyle="b3">신청일 : {applicationDate}</CustomText>
        <div className="pending_button_container">
          <CustomTag backgroundColor="#E1EBFD" onClick={() => {}}>
            승인
          </CustomTag>
          <CustomTag backgroundColor="#F7F7F7" onClick={() => {}}>
            거절
          </CustomTag>
        </div>
      </div>
    </PendingMemberItemContainer>
  );
};

export default PendingMemberItem;
