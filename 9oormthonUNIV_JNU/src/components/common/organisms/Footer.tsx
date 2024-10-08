import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import icon_github from "../../../assets/images/icon_github.svg";
import icon_instagram from "../../../assets/images/icon_instagram.svg";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 336px;
  box-sizing: border-box;
  background-color: #2b2d36;
  padding: 76px 100px 43px 100px;
  justify-content: space-between;

  .footer_logo {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .footer_icon {
    display: flex;
    gap: 50px;
    align-self: flex-start;
  }

  .footer_button {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_logo">
        <div>
          <img src={logo_horizontal} />
          <CustomText color="white">&nbsp;: CNU</CustomText>
        </div>
        <CustomText textStyle="b3" color="white">
          "사계절 구름과 함께"
        </CustomText>
        <div style={{ height: "120px" }} />
        <CustomText textStyle="nav" color="white">
          ⓒ goorm Inc. All rights Reserved.
        </CustomText>
      </div>
      <div className="footer_icon">
        <img
          className="footer_button"
          src={icon_github}
          width={48}
          onClick={() =>
            (window.location.href = "https://github.com/9oormthonUNIV-JNU")
          }
        />
        <img
          className="footer_button"
          src={icon_instagram}
          width={48}
          onClick={() =>
            (window.location.href =
              "https://www.instagram.com/9oormthon_univ_jnu/")
          }
        />
      </div>
    </FooterContainer>
  );
};

export default Footer;
