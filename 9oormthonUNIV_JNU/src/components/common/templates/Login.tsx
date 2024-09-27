import LoginForm from "../organisms/LoginForm";
import styled from "styled-components";

const LoginConatiner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Login = () => {
  return (
    <LoginConatiner>
      <LoginForm />
    </LoginConatiner>
  );
};

export default Login;
