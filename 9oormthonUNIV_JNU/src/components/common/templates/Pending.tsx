import CustomText from "../atoms/CustomText";
import CustomButton from "../atoms/CustomButton";
import logo_danpoong from "../../../assets/images/logo_danpoong.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PendingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 110px 0px;
  gap: 60px;

  .pending_notification {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .pending_logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Pending = () => {
  const nav = useNavigate();
  return (
    <PendingContainer>
      <div className="pending_notification">
        <CustomText textStyle="h1">
          해당 계정은 아직 승인 대기 중입니다!
        </CustomText>
        <CustomText textStyle="b1">
          관리자가 회원 승인 시 정상 로그인이 가능합니다.
        </CustomText>
      </div>
      <div>
        <CustomButton width={266} onClick={() => nav("/")}>
          메인 페이지로 이동하기
        </CustomButton>
      </div>
      <div className="pending_logo">
        <img src={logo_danpoong} />
      </div>
    </PendingContainer>
  );
};

export default Pending;
