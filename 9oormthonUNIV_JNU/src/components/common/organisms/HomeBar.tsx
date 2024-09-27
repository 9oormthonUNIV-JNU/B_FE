import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const BarContainer = styled.div`
  display: flex;
  margin: 80px;
  height: 65px;
  padding: 14px 27px;
  align-items: center;
  background-color: #97bffc;

`;

interface HomeBarProps {
  children: React.ReactNode;
}

const HomeBar: React.FC<HomeBarProps> = ({ children }) => {
  return (
    <BarContainer>
      <CustomText weight={600} size={32} color="#FFF">
        {children}
      </CustomText>
    </BarContainer>
  );
};

export default HomeBar;
