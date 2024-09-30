import CustomInput from "../atoms/CustomInput";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomButton from "../atoms/CustomButton";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 40px;

  .login {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .login_input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
  }

  .login_button {
    display: flex;
    width: 50%;
  }
`;

const LoginForm = () => {
  const nav = useNavigate();
  return (
    <LoginFormContainer>
      <div className="login">
        <CustomText textStyle="h2">LOGIN</CustomText>
      </div>
      <div className="login_input">
        <CustomInput placeholder="Email" type="email" />
        <CustomInput placeholder="Password" type="password" />
      </div>
      <div className="login_button">
        <CustomButton textStyle="b3" textColor="#5E5E5E">
          LOGIN
        </CustomButton>
      </div>
      <div>
        <CustomText color=" #797979" textStyle="nav">
          비밀번호 찾기
        </CustomText>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <CustomText
          color=" #797979"
          textStyle="nav"
          onClick={() => nav("/signup")}
        >
          회원가입
        </CustomText>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
