import styled from "styled-components";
import CustomText from "./CustomText";

type ButtonProps = {
  borderColor?: string;
  borderWidth?: string;
  bgColor?: string;
  radius?: string;
  textColor?: string;
  hoverColor?: string;
  textStyle?: "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";
  line?: number;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
 border-style: solid;
  border-color: ${(props) => props.borderColor || "#FFF"};
  border-width: ${(props) => (props.borderWidth ? `${props.borderWidth}px` : `0px`)};
  background-color: ${(props) => props.bgColor || "#9fbef7"};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : `20px`)};
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
  borderColor,
  borderWidth,
  bgColor,
  radius,
  textColor,
  hoverColor,
  textStyle,
  line,
  onClick,
}) => {
  return (
    <StyledButton
    borderColor={borderColor}
    borderWidth={borderWidth}
      bgColor={bgColor}
      radius={radius}
      textColor={textColor}
      hoverColor={hoverColor}
      onClick={onClick}
    >
      <CustomText textStyle={textStyle} color={textColor} line={line}>
        {children}
      </CustomText>
    </StyledButton>
  );
};

export default CustomButton;
