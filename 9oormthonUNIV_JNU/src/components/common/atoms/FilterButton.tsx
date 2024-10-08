import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import icon_down from "../../../assets/images/icon_down.svg";

const FilterButtonContainer = styled.button`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 30px;
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  gap: 5px;
`;

const DropdownMenu = styled.div<{ width: string }>`
  box-sizing: border-box;
  position: absolute;
  background-color: #f7f7f7;
  border: 10px solid #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => width};
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #d8d8d8;
  }
`;

type FilterButtonProps = {
  filterType: string;
  options: string[];
  onClick: (option: string) => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ filterType, options, onClick }) => {
  const [selectedOption, setSelectedOption] = useState<string>(filterType);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState("200px");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(`Selected option: ${option}`);
    onClick(option);
  };

  useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth;
      setDropdownWidth(`${buttonWidth}px`);
    }
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }}>
      <FilterButtonContainer ref={buttonRef} onClick={toggleDropdown}>
        <CustomText textStyle="b3">{selectedOption}</CustomText>
        <img src={icon_down} alt="down arrow" />
      </FilterButtonContainer>
      {isOpen && (
        <DropdownMenu width={dropdownWidth}>
          {options.map((option) => (
            <DropdownItem key={option} onClick={() => handleOptionClick(option)}>
              <CustomText textStyle="b3">{option}</CustomText>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};

export default FilterButton;
