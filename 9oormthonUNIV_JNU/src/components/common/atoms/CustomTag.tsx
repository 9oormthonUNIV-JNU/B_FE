import styled from "styled-components";
import CustomText from "./CustomText";

const StyledTag = styled.div<{ backgroundColor?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  height: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#E1EBFD"};
  border-radius: 10px;
`;

type CustomTagProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const CustomTag: React.FC<CustomTagProps> = ({ children, backgroundColor }) => {
  return (
    <StyledTag backgroundColor={backgroundColor}>
      <CustomText textStyle="b3">{children}</CustomText>
    </StyledTag>
  );
};

export default CustomTag;
