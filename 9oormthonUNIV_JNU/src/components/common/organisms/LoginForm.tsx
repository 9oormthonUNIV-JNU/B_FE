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

  .login {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 40px;
  }

  .login_input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    margin-bottom: 40px;
  }

  .login_button {
    display: flex;
    width: 50%;
    margin-bottom: 22px;
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
      <CustomText
        color=" #797979"
        textStyle="nav"
        onClick={() => nav("/signup")}
      >
        회원가입
      </CustomText>
    </LoginFormContainer>
  );
};

export default LoginForm;
