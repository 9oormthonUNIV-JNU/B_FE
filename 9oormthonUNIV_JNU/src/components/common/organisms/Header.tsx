import styled from "styled-components";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import CustomText from "../atoms/CustomText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 25px 100px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #9fbef7;
`;

const HeaderButtonContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HeaderButtonContainer
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CustomText
        textStyle="nav"
        color={isHovered ? "#FFA6A6" : isActive ? "#FF6D57" : "white"}
      >
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
  const navigate = useNavigate();

  const handleButtonClick = (option: string) => {
    setActiveOption(option);

    switch (option) {
      case "Member":
        navigate("/member");
        break;
      case "Activities":
        navigate("/activity");
        break;
      case "Recruit":
        navigate("/recruit");
        break;
      case "Login":
        navigate("/login");
        break;
      default:
        break;
    }
  };

  return (
    <HeaderContainer>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
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
