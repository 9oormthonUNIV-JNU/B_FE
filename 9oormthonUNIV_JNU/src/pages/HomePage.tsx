//홈페이지 입니다.
import CustomText from "../components/common/atoms/CustomText";
import Header from "../components/common/organisms/Header";
import Footer from "../components/common/organisms/Footer";
import styled from "styled-components";
import HomeBar from "../components/common/organisms/HomeBar";

const MainContainer = styled.div`
display: flex;
width:100%;
height: 584px;
padding: 242px 260px 143px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
box-sizing: border-box;
gap: 37px;

`

const HomePage = () => {
    return (
        <>
          <Header/>
           <MainContainer>
                <CustomText weight={600}  size={64}>
                    구름톤 유니브 전남대
                </CustomText>
                <CustomText weight={500} size={36}>
                구름톤 유니브는 goorm과 kakao에서 후원하는 전국 IT연합 동아리로, 전남대학교는 구름톤 유니브에 2기부터 함께하게 되었습니다. 
                </CustomText>
            </MainContainer>
            <HomeBar>교내활동</HomeBar>
          <Footer/>
        </>
      );

};

export default HomePage;
