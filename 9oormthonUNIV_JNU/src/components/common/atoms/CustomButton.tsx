import styled from "styled-components";
import CustomText from "./CustomText";

type ButtonProps = {
  borderColor?: string;
  bgColor?: string;
  radius?: string;
  textColor?: string;
  textStyle?: "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => `1px solid ${props.borderColor || "#8FABDE"}`};
  background-color: ${(props) => props.bgColor || "#9fbef7"};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : `20px`)};
  color: ${(props) => props.textColor || "#5e5e5e"};
  height: 70px;
  width: 100%;
  cursor: pointer;
`;

const CustomButton: React.FC<ButtonProps & { children: React.ReactNode }> = ({
  children,
  borderColor,
  bgColor,
  radius,
  textColor,
  textStyle,
  onClick,
}) => {
  return (
    <StyledButton
      borderColor={borderColor}
      bgColor={bgColor}
      radius={radius}
      textColor={textColor}
      onClick={onClick}
    >
      <CustomText textStyle={textStyle} color={textColor}>
        {children}
      </CustomText>
    </StyledButton>
  );
};

export default CustomButton;
