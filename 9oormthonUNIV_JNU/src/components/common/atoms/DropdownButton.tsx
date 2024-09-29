import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import CustomText from "./CustomText";
import icon_down from "../../../assets/images/icon_down.svg";

type DropdownButtonProps = {
  label: string;
  options: string[];
  value?: string;
  onChange?: (selected: string) => void;
};

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  position: relative;

  .dropdown_label {
    margin-left: 10px;
  }
`;

const StyledDropdownButton = styled.button`
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  background-color: #f7f7f7;
  height: 64px;
  padding: 20px 30px;
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
    box-shadow: 0 0 0 1px rgba(159, 190, 247, 0.5);
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

const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #d8d8d8;
  }
`;

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || label);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState("200px");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
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
      <StyledDropdownButton ref={buttonRef} onClick={toggleDropdown}>
        <CustomText textStyle="b3" color="#797979">
          {selectedOption}
        </CustomText>
        <img src={icon_down} alt="down arrow" />
      </StyledDropdownButton>
      {isOpen && (
        <DropdownMenu ref={dropdownRef} width={dropdownWidth}>
          {options.map((option) => (
            <DropdownItem
              key={option}
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
