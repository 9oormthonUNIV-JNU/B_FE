import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/organisms/Header";
import Footer from "./components/common/organisms/Footer";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import LoginPage from "./pages/LoginPage";
import MemberPage from "./pages/MemberPage";
import RecruitPage from "./pages/RecruitPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import AdminPage from "./pages/AdminPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activity" element={<ActivityPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/member" element={<MemberPage />} />
            <Route path="/recruit" element={<RecruitPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </MainContainer>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
