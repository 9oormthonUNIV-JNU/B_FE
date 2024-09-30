import styled from "styled-components";
import CustomText from "./CustomText";

const LabelButtonContainer = styled.button<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 30px;
  background-color: ${({ isActive }) => (isActive ? "#9FBEF7" : "#F7F7F7")};
  border: 1px solid ${({ isActive }) => (isActive ? "#778FB9" : "#E5E5E5")};
`;

type LabelButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const LabelButton: React.FC<LabelButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <LabelButtonContainer isActive={isActive} onClick={onClick}>
      <CustomText textStyle="b3" color={isActive ? "white" : "black"}>
        {label}
      </CustomText>
    </LabelButtonContainer>
  );
};

export default LabelButton;
