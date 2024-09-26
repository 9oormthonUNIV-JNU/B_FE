import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/organisms/Header";
import Footer from "./components/common/organisms/Footer";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import ActivityManagePage from "./pages/ActivityManagePage";
import ActivityPage from "./pages/ActivityPage";
import LoginPage from "./pages/LoginPage";
import MemberApprovalPage from "./pages/MemberApprovalPage";
import MemberPage from "./pages/MemberPage";
import RecruitPage from "./pages/RecruitPage";
import ScheduleManagePage from "./pages/ScheduleManagePage";
import SignupPage from "./pages/SignupPage";

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
          <Route path="/activity-manage" element={<ActivityManagePage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/member-approval" element={<MemberApprovalPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/schedule-manage" element={<ScheduleManagePage />} />
          <Route path="/sign" element={<SignupPage />} />
        </Routes>
      </MainContainer>
      <Footer />
    </Router>
  );
};

export default App;
