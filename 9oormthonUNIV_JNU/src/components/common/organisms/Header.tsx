import styled from "styled-components";
import logo_horizontal from "../../../assets/images/logo_horizontal.svg";
import CustomText from "../atoms/CustomText";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CircledImage from "../../general/atoms/CircledImage";

const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  width: 120px;
  padding: 10px 10px;
  box-sizing: border-box;
  z-index: 1;
`;

const DropdownItem = styled.div<{ selected?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 0px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#d8d8d8" : "transparent")};

  &:hover {
    background-color: #e5e5e5;
  }
`;

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
  box-sizing: border-box;
  align-items: center;
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
        onClick={() => {}}
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

  .header_circled {
    display: flex;
    align-items: center;
  }
`;

const Header = () => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [role, setRole] = useState<string>("admin"); // 'guest', 'general', 'admin' 역할 구분
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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

  const handleDropdownItemClick = (option: string) => {
    setIsDropdownOpen(false);
    switch (option) {
      case "마이페이지":
        navigate("/mypage");
        break;
      case "관리자 페이지":
        navigate("/admin");
        break;
      case "일정":
        navigate("/schedule");
        break;
      case "로그아웃":
        setRole("guest");
        break;
      default:
        break;
    }
  };

  const dropdownOptions =
    role === "admin"
      ? ["마이페이지", "관리자 페이지", "일정", "로그아웃"]
      : ["마이페이지", "일정", "로그아웃"];

  return (
    <HeaderContainer>
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        <img src={logo_horizontal} alt="logo" />
        <CustomText color="white">&nbsp;: CNU</CustomText>
      </div>
      <OptionContainer>
        {["Member", "Activities", "Recruit"].map((option) => (
          <HeaderButton
            key={option}
            option={option}
            isActive={activeOption === option}
            onClick={() => handleButtonClick(option)}
          />
        ))}

        {/* 로그인 상태에 따라 Login 버튼 또는 CircledImage 표시 */}
        {role === "guest" ? (
          <HeaderButton
            option="Login"
            isActive={activeOption === "Login"}
            onClick={() => handleButtonClick("Login")}
          />
        ) : (
          <div
            className="header_circled"
            ref={dropdownRef}
            style={{ position: "relative" }}
          >
            <CircledImage
              width="48px"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />
            {isDropdownOpen && (
              <DropdownMenu>
                {dropdownOptions.map((option) => (
                  <DropdownItem
                    key={option}
                    onClick={() => handleDropdownItemClick(option)}
                  >
                    <CustomText textStyle="nav">{option}</CustomText>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </div>
        )}
      </OptionContainer>
    </HeaderContainer>
  );
};

export default Header;
