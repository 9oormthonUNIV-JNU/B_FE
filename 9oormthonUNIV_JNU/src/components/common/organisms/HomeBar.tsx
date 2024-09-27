import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const BarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  padding: 15px 30px;
  align-items: center;
  background-color: #97bffc;
  box-sizing: border-box;
`;

interface HomeBarProps {
  children: React.ReactNode;
}

const HomeBar: React.FC<HomeBarProps> = ({ children }) => {
  return (
    <BarContainer>
      <CustomText textStyle="h3" color="#FFF">
        {children}
      </CustomText>
    </BarContainer>
  );
};

export default HomeBar;
