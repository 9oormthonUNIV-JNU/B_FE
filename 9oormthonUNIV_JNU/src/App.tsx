import Header from "./components/common/organisms/Header";
import Footer from "./components/common/organisms/Footer";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const MainContainer = styled.div`
  flex-direction: column;
  padding: 100px 100px;
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
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default App;
