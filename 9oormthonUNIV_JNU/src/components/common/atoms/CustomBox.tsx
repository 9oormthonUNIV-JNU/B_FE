import styled from "styled-components";

type CustomBoxProps = {
  width: number;
  height: number;
  backgroundColor?: string;
  gap?: number;
};

const getDimension = (value?: number): string => {
  return value ? `${value}px` : "0px";
};

const CustomBox = styled.div<CustomBoxProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => getDimension(width)};
  height: ${({ height }) => getDimension(height)};
  background-color: ${({ backgroundColor }) => backgroundColor || "#fff"};
  border-radius: 18px;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  overflow: hidden;
  gap: ${({ gap }) => getDimension(gap)};

  &:hover {
    box-shadow: 0px 5px 20px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default CustomBox;
