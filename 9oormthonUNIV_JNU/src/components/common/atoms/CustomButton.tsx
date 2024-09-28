// CustomButton.tsx
import styled from "styled-components";
import CustomText from "./CustomText";

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  textStyle?: "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";
  line?: number;
};

const StyledButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${(props) => props.bgColor || "#9fbef7"};
  border-radius: 20px;
  color: ${(props) => props.textColor || "#5e5e5e"};
  height: 70px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#8FABDE"};
  }
`;

const CustomButton: React.FC<ButtonProps & { children: React.ReactNode }> = ({
  children,
  bgColor,
  textColor,
  hoverColor,
  textStyle,
  line,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor}
    >
      <CustomText textStyle={textStyle} color={textColor} line={line}>
        {children}
      </CustomText>
    </StyledButton>
  );
};

export default CustomButton;
