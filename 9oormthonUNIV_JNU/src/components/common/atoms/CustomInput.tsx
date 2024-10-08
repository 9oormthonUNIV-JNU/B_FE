import React, { forwardRef } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import "../../../assets/fonts/font.css";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  .input_label {
    margin-left: 10px;
  }
`;

const StyledInput = styled.input`
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  background-color: #f7f7f7;
  height: 64px;
  padding: 20px 30px;
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: clamp(16px, 2vw, 20px);

  &::-webkit-input-placeholder {
    color: #797979;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: clamp(16px, 2vw, 20px);
  }

  &::-moz-placeholder {
    color: #797979;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: clamp(16px, 2vw, 20px);
  }

  &:-ms-input-placeholder {
    color: #797979;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: clamp(16px, 2vw, 20px);
  }

  &:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(159, 190, 247, 0.5);
  }
`;

type CustomInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, placeholder, value = "", type = "text", onChange }, ref) => {
    return (
      <InputContainer>
        <div className="input_label">
          {label && <CustomText textStyle="b3">{label}</CustomText>}
        </div>
        <StyledInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </InputContainer>
    );
  }
);

export default CustomInput;
