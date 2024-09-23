import styled from "styled-components";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import CustomText from "../atoms/CustomText";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 25px 100px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
  background-color: #97bffc;
`;

type HeaderButtonProps = {
  option: string;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({ option }) => {
  return (
    <CustomText size={16} weight={600} color="white">
      {option}
    </CustomText>
  );
};

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <CustomText weight={700} size={24} color="white">
          CNU :&nbsp;
        </CustomText>
        <img src={logo_horizontal} />
      </div>
      <OptionContainer>
        <HeaderButton option="Member" />
        <HeaderButton option="Activities" />
        <HeaderButton option="Recruit" />
        <HeaderButton option="Login" />
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
