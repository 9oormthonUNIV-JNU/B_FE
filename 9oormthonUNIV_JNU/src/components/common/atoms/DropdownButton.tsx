import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import CustomText from "./CustomText";
import icon_down from "../../../assets/images/icon_down.svg";

type DropdownButtonProps = {
  label?: string;
  options: string[];
  value?: string | string[]; // 다중 선택 시 string[]
  onChange?: (selected: string[]) => void; // 다중 선택에만 집중할 경우 string[]로 변경
  multi?: boolean; // 다중 선택 여부
  style?: React.CSSProperties;
  form?: boolean;
};

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  .dropdown_label {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

const StyledDropdownButton = styled.button<{ form?: boolean }>`
  border-radius: ${({ form }) => (form ? "10px" : "20px")};
  border: ${({ form }) => (form ? "none" : "1px solid #e5e5e5")};
  background-color: #f7f7f7;
  height: ${({ form }) => (form ? "30px" : "64px")};
  padding: ${({ form }) => (form ? "4px 8px" : "20px 30px")};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ::placeholder {
    color: #797979;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 20px;
  }

  &:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    box-shadow: ${({ form }) =>
      form ? "none" : "0 0 0 1px rgba(159, 190, 247, 0.5);"};
  }
`;

const DropdownMenu = styled.div<{ width: string }>`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background-color: #f7f7f7;
  border: 10px solid #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  width: ${({ width }) => width};
  z-index: 1;
`;

const DropdownItem = styled.div<{ form: boolean; selected?: boolean }>`
  display: flex;
  align-items: center;
  height: ${({ form }) => (form ? "35px" : "64px")};
  padding: ${({ form }) => (form ? "4px 8px" : "20px 30px")};
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${({ selected }) => (selected ? "#d8d8d8" : "transparent")};

  &:hover {
    background-color: #d8d8d8;
  }
`;

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  options,
  value,
  onChange,
  style,
  form = false,
  multi = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    Array.isArray(value) ? value : []
  );
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState("200px");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    if (multi) {
      // 다중 선택일 경우
      const updatedSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option];
      setSelectedOptions(updatedSelection);
      if (onChange) onChange(updatedSelection); // 다중 선택일 경우 배열 전달
    } else {
      setSelectedOptions([option]);
      setIsOpen(false);
      if (onChange) onChange([option]); // 단일 선택도 배열 형태로 전달
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth;
      setDropdownWidth(`${buttonWidth}px`);
    }
  }, [isOpen]);

  return (
    <DropdownContainer>
      <div className="dropdown_label">
        {label && <CustomText textStyle="b3">{label}</CustomText>}
      </div>
      <StyledDropdownButton
        style={style}
        ref={buttonRef}
        onClick={toggleDropdown}
        form={form}
      >
        <CustomText textStyle="b3" color="#797979">
          {selectedOptions.length > 0 ? selectedOptions.join(", ") : label}
        </CustomText>
        <img src={icon_down} alt="down arrow" />
      </StyledDropdownButton>
      {isOpen && (
        <DropdownMenu ref={dropdownRef} width={dropdownWidth}>
          {options.map((option) => (
            <DropdownItem
              form={form}
              key={option}
              selected={selectedOptions.includes(option)}
              onClick={() => handleOptionClick(option)}
            >
              <CustomText textStyle="b3">{option}</CustomText>
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default DropdownButton;
