import React from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";

type MenuBarProps = {
  options: string[];
  onOptionClick?: (option: string) => void;
};

const MenuBarContainer = styled.div`
  width: 270px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 23px 20px;
  gap: 18px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
`;

const MenuBarItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const MenuBar: React.FC<MenuBarProps> = ({ options, onOptionClick }) => {
  return (
    <MenuBarContainer>
      {options.map((option, index) => (
        <MenuBarItem key={index} onClick={() => onOptionClick?.(option)}>
          <CustomText textStyle="b2">{option}</CustomText>
        </MenuBarItem>
      ))}
    </MenuBarContainer>
  );
};

export default MenuBar;
