import styled from "styled-components";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import CustomText from "../atoms/CustomText";
import { useState } from "react";

const HeaderContainer = styled.div`
  display: flex;
  margin: 0;
  flex-direction: row;
  width: 100%;
  padding: 25px 100px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
  background-color: #9fbef7;
`;

const HeaderButtonContainer = styled.button`
  border: none;
  background: none;
`;

type HeaderButtonProps = {
  option: string;
  isActive: boolean;
  onClick: () => void;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  option,
  isActive,
  onClick,
}) => {
  return (
    <HeaderButtonContainer onClick={onClick} style={{ cursor: "pointer" }}>
      <CustomText textStyle="nav" color={isActive ? "#FF6D57" : "white"}>
        {option}
      </CustomText>
    </HeaderButtonContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

const Header = () => {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleButtonClick = (option: string) => {
    setActiveOption(option);
  };

  return (
    <HeaderContainer>
      <div>
        <img src={logo_horizontal} />
        <CustomText color="white">&nbsp;: CNU</CustomText>
      </div>
      <OptionContainer>
        {["Member", "Activities", "Recruit", "Login"].map((option) => (
          <HeaderButton
            key={option}
            option={option}
            isActive={activeOption === option}
            onClick={() => handleButtonClick(option)}
          />
        ))}
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
