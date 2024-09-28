import logo_danpoong from "../../../assets/images/logo_danpoong.svg";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import CustomText from "../atoms/CustomText";
import styled from "styled-components";

const LoginLogoBackground = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9fbef7;
  box-sizing: border-box;
  gap: 60px;
`;

const LoginLogoContainer = styled.div`
  padding: 100px;

  .login_horizontal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .login_logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login_danpoong {
    max-width: 500px;
    margin-top: 80px;
  }
`;

const LoginLogo = () => {
  return (
    <LoginLogoBackground>
      <LoginLogoContainer>
        <div className="login_horizontal">
          <div className="login_logo">
            <CustomText color="white" textStyle="h1">
              BEING ALL SEASON
            </CustomText>
            <CustomText color="white" textStyle="h1">
              WITH GOORM
            </CustomText>
          </div>
          <div>
            <img src={logo_horizontal} />
            <CustomText color="white">&nbsp;: CNU</CustomText>
          </div>
        </div>
        <div className="login_danpoong">
          <img src={logo_danpoong} width="100%" />
        </div>
      </LoginLogoContainer>
    </LoginLogoBackground>
  );
};

export default LoginLogo;
