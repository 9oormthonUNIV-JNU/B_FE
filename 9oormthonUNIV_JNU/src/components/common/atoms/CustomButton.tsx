import styled from "styled-components";
import CustomText from "./CustomText";

type ButtonProps = {
  borderColor?: string;
  width?: number;
  height?: number;
  bgColor?: string;
  radius?: number;
  textColor?: string;
  textStyle?: "h1" | "h2" | "h3" | "b1" | "b2" | "b3" | "nav";
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid ${(props) => props.borderColor || "#8FABDE"};
  background-color: ${(props) => props.bgColor || "#9fbef7"};
  border-radius: ${(props) => `${props.radius || 20}px`};
  color: ${(props) => props.textColor || "#2B2D36"};
  height: ${(props) => `${props.height || 64}px`};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  cursor: pointer;
`;

const CustomButton: React.FC<ButtonProps & { children: React.ReactNode }> = ({
  children,
  borderColor,
  bgColor,
  radius,
  textColor,
  textStyle = "b3",
  onClick,
  width,
  height,
}) => {
  return (
    <StyledButton
      borderColor={borderColor}
      bgColor={bgColor}
      radius={radius}
      textColor={textColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      <CustomText onClick={() => {}} textStyle={textStyle} color={textColor}>
        {children}
      </CustomText>
    </StyledButton>
  );
};

export default CustomButton;
