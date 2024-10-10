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
  border: 1px solid ${({ isActive }) => (isActive ? "#778FB9" : "#E5E5E5")};
  background-color: ${({ isActive }) => (isActive ? "#9FBEF7" : "#F7F7F7")};
`;

type LabelButtonProps = {
  label: string;
  isActive?: boolean;
  onClick: () => void;
};

const LabelButton: React.FC<LabelButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <LabelButtonContainer isActive={isActive} onClick={onClick}>
      {/* isActive에 따라 텍스트 색상을 흰색 또는 검정색으로 설정 */}
      <CustomText
        onClick={() => onClick}
        textStyle="b3"
        color={isActive ? "white" : "black"}
      >
        {label}
      </CustomText>
    </LabelButtonContainer>
  );
};

export default LabelButton;
