import SignupForm from "../organisms/SignupForm";
import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  width: 550px;
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
