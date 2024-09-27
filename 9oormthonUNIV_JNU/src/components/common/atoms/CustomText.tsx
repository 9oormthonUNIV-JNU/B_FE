import React from "react";
import styled from "styled-components";
import "../../../assets/fonts/font.css";

type TextStyle = "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";

type CustomTextProps = {
  children: React.ReactNode;
  textStyle?: TextStyle; // `style`을 `textStyle`로 변경
  color?: string;
  line?: number;
};

const getFontStyles = (
  textStyle?: TextStyle
): { size: number; weight: number } => {
  switch (textStyle) {
    case "h1":
      return { size: 48, weight: 600 };
    case "h2":
      return { size: 40, weight: 600 };
    case "h3":
      return { size: 32, weight: 600 };
    case "b1":
      return { size: 32, weight: 500 };
    case "b2":
      return { size: 24, weight: 500 };
    case "b3":
      return { size: 20, weight: 500 };
    case "nav":
      return { size: 16, weight: 600 };
    default:
      return { size: 24, weight: 700 };
  }
};

const getLineHeight = (line?: number): string => {
  return line ? `${line}px` : "normal";
};

const StyledText = styled.span<CustomTextProps>`
  font-family: "Pretendard";
  font-weight: ${({ textStyle }) => getFontStyles(textStyle).weight};
  font-size: ${({ textStyle }) => `${getFontStyles(textStyle).size}px`};
  color: ${({ color }) => color || "black"};
  line-height: ${({ line }) => getLineHeight(line)};
`;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  textStyle,
  color = "black",
  line,
}) => {
  return (
    <StyledText textStyle={textStyle} color={color} line={line}>
      {children}
    </StyledText>
  );
};

export default CustomText;
