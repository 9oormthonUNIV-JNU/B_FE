import React from "react";
import styled from "styled-components";
import "../../../assets/fonts/font.css";

type TextStyle = "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";

type CustomTextProps = {
  children: React.ReactNode;
  textStyle?: TextStyle;
  color?: string;
  line?: number;
  onClick?: () => void;
};

const getFontStyles = (
  textStyle?: TextStyle
): { size: string; weight: number } => {
  switch (textStyle) {
    case "h1":
      return { size: "clamp(32px, 4vw, 48px)", weight: 600 };
    case "h2":
      return { size: "clamp(28px, 3.5vw, 40px)", weight: 600 };
    case "h3":
      return { size: "clamp(24px, 3vw, 32px)", weight: 600 };
    case "b1":
      return { size: "clamp(24px, 3vw, 32px)", weight: 500 };
    case "b2":
      return { size: "clamp(18px, 2.5vw, 24px)", weight: 500 };
    case "b3":
      return { size: "clamp(16px, 2vw, 20px)", weight: 500 };
    case "nav":
      return { size: "clamp(14px, 1.5vw, 16px)", weight: 600 };
    default:
      return { size: "clamp(18px, 2vw, 24px)", weight: 700 };
  }
};

const getLineHeight = (line?: number): string => {
  return line ? `${line}px` : "normal";
};

const StyledText = styled.span<CustomTextProps>`
  font-family: "Pretendard";
  font-weight: ${({ textStyle }) => getFontStyles(textStyle).weight};
  font-size: ${({ textStyle }) => getFontStyles(textStyle).size} !important;
  color: ${({ color }) => color || "black"};
  line-height: ${({ line }) => getLineHeight(line)};
  white-space: pre-line;
`;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  textStyle,
  color = "black",
  line,
  onClick,
}) => {
  return (
    <StyledText
      textStyle={textStyle}
      color={color}
      line={line}
      onClick={onClick}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;
