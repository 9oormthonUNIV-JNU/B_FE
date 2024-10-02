import CustomText from "../atoms/CustomText";
import CustomInput from "../atoms/CustomInput";
import EmailVerification from "../molecules/EmailVerification";
import styled from "styled-components";
import DropdownButton from "../atoms/DropdownButton";
import CustomButton from "../atoms/CustomButton";
import { useNavigate } from "react-router-dom";

const SignupFormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .signup {
    margin-bottom: 30px;
  }

  .signup_email {
    display: flex;
    flex-direction: column;
    width: 100%;

    .signup_email_input {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      width: 100%;
    }
  }

  .signup_password {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    .signup_password_info {
      display: flex;
      margin-left: 10px;
    }
  }

  .signup_select {
    width: 100%;
  }

  .signup_button {
    margin: 20px 0px 60px;
    width: 100%;
  }
`;

const Notification = styled.div`
  display: flex;
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 20px;
`;

const SignupForm = () => {
  const navigate = useNavigate();

  return (
    <SignupFormContainer>
      <div className="signup">
        <CustomText textStyle="h1">SIGN UP</CustomText>
      </div>
      <Notification>
        <CustomText textStyle="b3" line={30}>
          회원가입 대상자는 구름톤 유니브 전남대 회원입니다. 그 외 사용자가
          회원가입 할 경우 회원가입 승인 처리가 되지 않습니다.
        </CustomText>
      </Notification>
      <CustomInput label="이름" placeholder="김구름" />
      <EmailVerification />
      <div className="signup_password">
        <CustomInput label="비밀번호" placeholder="비밀번호" type="password" />
        <div className="signup_password_info">
          <CustomText textStyle="nav" color=" #484848">
            영문자/숫자/특수문자가 포함된 8~15자 조합으로 입력해주세요
          </CustomText>
        </div>
      </div>
      <div className="signup_select">
        <DropdownButton label="기수 선택" options={["2기", "3기"]} />
      </div>
      <div className="signup_select">
        <DropdownButton label="파트 선택" options={["PM", "PD", "FE", "BE"]} />
      </div>
      <div className="signup_button">
        <CustomButton
          textStyle="b3"
          textColor="#2B2D36"
          onClick={() => navigate("/pending")}
        >
          SIGN UP
        </CustomButton>
      </div>
    </SignupFormContainer>
  );
};

export default SignupForm;
