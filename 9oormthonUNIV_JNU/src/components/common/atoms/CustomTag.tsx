import styled from "styled-components";
import CustomText from "./CustomText";

const StyledTag = styled.div<{ backgroundColor?: string; clickable?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  height: 30px;
  color: ${({ color }) => color || "black"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#E1EBFD"};
  border-radius: 10px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
`;

type CustomTagProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick?: () => void;
  color?: string;
};

const CustomTag: React.FC<CustomTagProps> = ({
  children,
  backgroundColor,
  onClick,
  color,
}) => {
  return (
    <StyledTag
      backgroundColor={backgroundColor}
      clickable={!!onClick}
      onClick={onClick}
    >
      <CustomText onClick={() => {}} textStyle="b3" color={color}>
        {children}
      </CustomText>
    </StyledTag>
  );
};

export default CustomTag;
