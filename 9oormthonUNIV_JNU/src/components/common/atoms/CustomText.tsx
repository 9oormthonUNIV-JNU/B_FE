import React from "react";
import styled from "styled-components";

type FontWeight = 400 | 500 | 600 | 700;

type CustomTextProps = {
  children: React.ReactNode;
  weight?: FontWeight;
  size?: number;
  color?: string;
};

const getFontFamily = (weight: FontWeight): string => {
  switch (weight) {
    case 400:
      return "Pretandard-Medium";
    case 500:
      return "Pretandard-Regular";
    case 600:
      return "Pretandard-SemiBold";
    case 700:
      return "Pretandard-Bold";
    default:
      return "Pretandard-Medium";
  }
};

const getFontSize = (size?: number): string => {
  return size ? `${size}px` : "16px";
};

const StyledText = styled.span<CustomTextProps>`
  font-family: ${({ weight }) => getFontFamily(weight || 400)}, sans-serif;
  font-size: ${({ size }) => getFontSize(size)};
  color: ${({ color }) => color || "black"};
  font-weight: ${({ weight }) => weight || 400};
`;

const CustomText: React.FC<CustomTextProps> = ({
  children,
  weight = 400,
  size = 16,
  color = "black",
}) => {
  return (
    <StyledText weight={weight} size={size} color={color}>
      {children}
    </StyledText>
  );
};

export default CustomText;
