import Header from "./components/common/organisms/Header";
import Footer from "./components/common/organisms/Footer";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Accordion from "./components/common/atoms/Arcordion";

const MainContainer = styled.div`
  flex-direction: column;
  padding: 50px 100px;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 336px;
`;

const App = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Accordion title="2기 모집글 확인하기">
          https://account.everytime.kr/login?redirect_uri=https%3A%2F%2Feverytime.kr%2F375208%2Fv%2F348827899
        </Accordion>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default App;
