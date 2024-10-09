import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";

type MenuBarProps = {
  options: string[];
  onOptionClick?: (option: string) => void;
};

const MenuBarContainer = styled.div`
  background-color: white;
  width: 270px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23px 20px;
  gap: 18px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  z-index: 999;
`;

const MenuBarItem = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? "#d8d8d8" : "transparent")};

  &:hover {
    background-color: #d8d8d8;
  }
`;

const MenuBar: React.FC<MenuBarProps> = ({ options, onOptionClick }) => {
  const [activeOption, setActiveOption] = useState<string>("회원 관리");

  const handleClick = (option: string) => {
    setActiveOption(option);
    onOptionClick?.(option);
  };

  return (
    <MenuBarContainer>
      {options.map((option, index) => (
        <MenuBarItem
          key={index}
          isActive={activeOption === option}
          onClick={() => handleClick(option)}
        >
          <CustomText textStyle="b2" onClick={() => {}}>
            {option}
          </CustomText>
        </MenuBarItem>
      ))}
    </MenuBarContainer>
  );
};

export default MenuBar;
