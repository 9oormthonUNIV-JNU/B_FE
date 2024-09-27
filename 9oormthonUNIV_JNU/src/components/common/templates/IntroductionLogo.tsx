import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import logo_danpoong from "../../../assets/images/logo_danpoong.svg";
import logo_cloud from "../../../assets/images/logo_cloud.svg";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const LogoBackground = styled.div`
  background-color: #9fbef7;
  width: 100%;
  height: 450px;
  padding: 80px 150px 0px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
  }

  .logo_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
  }

  .logo_horizontal {
    display: flex;
    flex-direction: column;
    width: 650px;
    gap: 20px;
  }

  .logo_danpoong {
    width: 600px;
  }
`;

const IntroductionLogo = () => {
  return (
    <>
      <LogoBackground>
        <div className="logo_container">
          <div className="logo_horizontal">
            <img src={logo_horizontal} />
            <CustomText color="white" textStyle="h2">
              Chonnam National University
            </CustomText>
          </div>
          <div className="logo_danpoong">
            <img src={logo_danpoong} />
          </div>
        </div>
      </LogoBackground>
      <img src={logo_cloud} />
    </>
  );
};

export default IntroductionLogo;
