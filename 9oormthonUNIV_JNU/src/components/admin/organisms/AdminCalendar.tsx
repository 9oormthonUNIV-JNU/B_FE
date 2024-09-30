import { useState } from "react";
import CustomCalendar from "../../general/molecules/CustomCalendar";
import CustomModal from "../atoms/CustomModal";
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
  date: Date;
  name: string;
  member: string;
  description: string;
};

const AdminCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const [form, setForm] = useState<Schedule>({
    date: new Date(),
    name: "",
    member: "",
    description: "",
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setForm({ date: new Date(), name: "", member: "", description: "" });
  };

  // 이벤트 핸들러에서 정확한 타입을 명시
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setSchedules([...schedules, form]);
    handleCloseModal();
  };

  return (
    <AdminCalendarWrapper>
      <MonthNavigation>
        <LabelButton
          isActive={true}
          label="+ 일정 추가"
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
        form={form}
        handleChange={handleChange}
      />
    </AdminCalendarWrapper>
  );
};

export default AdminCalendar;
