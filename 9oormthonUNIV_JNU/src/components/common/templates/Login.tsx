import LoginForm from "../organisms/LoginForm";
import styled from "styled-components";

const LoginConatiner = styled.div`
  width: 20%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginConatiner>
      <LoginForm />
    </LoginConatiner>
  );
};

export default Login;
