import { useState } from "react";
import CustomCalendar from "../../general/molecules/CustomCalendar";
import CustomModal from "../molecules/CustomModal";
import styled from "styled-components";
import LabelButton from "../../common/atoms/LabelButton";

const AdminCalendarWrapper = styled.div`
  padding: 20px;
`;

const MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

type Schedule = {
  date: string;
  name: string;
  member: string;
  description: string;
};

const AdminCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isButtonActive, setIsButtonActive] = useState(false); // isActive 상태 추가

  const [modalForm, setModalForm] = useState<Schedule>({
    date: "",
    name: "",
    member: "",
    description: "",
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
    setIsButtonActive(true); // 버튼 클릭 시 isActive 상태를 true로 설정
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setModalForm({ date: "", name: "", member: "", description: "" });
    setIsButtonActive(false); // 모달 닫을 때 isActive 상태를 false로 설정
  };

  const handleModalChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setSchedules([...schedules, modalForm]);
    handleCloseModal();
  };

  return (
    <AdminCalendarWrapper>
      <MonthNavigation>
        <LabelButton
          label="+ 일정 추가"
          isActive={isButtonActive} // isActive 상태 전달
          onClick={handleOpenModal}
        />
      </MonthNavigation>

      {/* CustomCalendar 컴포넌트 사용 */}
      <CustomCalendar />

      {/* 일정 추가 모달 */}
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        onSave={handleSave}
        modalForm={modalForm} // 'modalForm' 전달
        handleModalChange={handleModalChange} // 'handleModalChange' 전달
      />
    </AdminCalendarWrapper>
  );
};

export default AdminCalendar;
