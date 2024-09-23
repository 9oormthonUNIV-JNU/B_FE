import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import icon_github from "../../../assets/images/icon_github.svg";
import icon_instagram from "../../../assets/images/icon_instagram.svg";

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
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
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_logo">
        <CustomText size={36} weight={700} color="white">
          9oormthon UNIV: CNU
        </CustomText>
        <CustomText size={20} weight={500} color="white">
          "사계절 구름과 함께"
        </CustomText>
        <div style={{ height: "120px" }} />
        <CustomText size={14} weight={500} color="white">
          ⓒ goorm Inc. All rights Reserved.
        </CustomText>
      </div>
      <div className="footer_icon">
        <img src={icon_github} width={48} />
        <img src={icon_instagram} width={48} />
      </div>
    </FooterContainer>
  );
};

export default Footer;
