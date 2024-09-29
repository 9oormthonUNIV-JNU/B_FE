import SignupForm from "../organisms/SignupForm";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;
  width: 100%;
  margin: 120px auto;
`;

const Signup = () => {
  return (
    <SignupContainer>
      <SignupForm />
    </SignupContainer>
  );
};

export default Signup;
