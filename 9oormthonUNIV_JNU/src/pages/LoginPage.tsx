import LoginLogo from "../components/common/templates/LoginLogo";
import Login from "../components/common/templates/Login";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
`;

const LoginPage = () => {
  return (
    <PageContainer>
      <LoginLogo />
      <Login />
    </PageContainer>
  );
};

export default LoginPage;
