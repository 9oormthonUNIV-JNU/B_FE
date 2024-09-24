import React from "react";
import styled from "styled-components";
import "../../../assets/fonts/font.css";

type FontWeight = 400 | 500 | 600 | 700;

type CustomTextProps = {
  children: React.ReactNode;
  weight?: FontWeight;
  size?: number;
  color?: string;
  line?: number;
};

const getFontSize = (size?: number): string => {
  return size ? `${size}px` : "16px";
};

const getLineHeight = (line?: number): string => {
  return line ? `${line}px` : "normal";
};

const StyledText = styled.span<CustomTextProps>`
  font-family: "Pretendard";
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color || "black"};
  line-height: ${({ line }) => getLineHeight(line)};
`;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight = 400,
  size = 16,
  color = "black",
  line,
}) => {
  return (
    <StyledText weight={weight} size={size} color={color} line={line}>
      {children}
    </StyledText>
  );
};

export default CustomText;
