import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ModalWrapper = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001; /* 모달 자체에 높은 z-index를 설정 */
`;

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const InputField = styled.div`
  margin-bottom: 15px;

  label {
    font-size: 1rem;
    font-weight: bold;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

type Schedule = {
  date: Date;
  name: string;
  member: string;
  description: string;
};

type CustomModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: () => void;
  form: Schedule;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  onSave,
  form,
  handleChange,
}) => {
  // 날짜를 문자열에서 Date 객체로 변환
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    handleChange({
      ...e,
      target: {
        ...e.target,
        value: newDate.toISOString(), // 여기서 Date 객체를 다시 문자열로 변환하여 처리
      } as HTMLInputElement, // HTMLInputElement로 캐스팅
    });
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay" /* 오버레이에 클래스를 지정 */
    >
      <h2>일정 추가</h2>
      <InputField>
        <label>날짜</label>
        <input
          type="date"
          name="date"
          value={form.date.toISOString().split("T")[0]} // yyyy-mm-dd 형식으로 변환
          onChange={handleDateChange} // 날짜 변경 이벤트를 따로 처리
        />
      </InputField>
      <InputField>
        <label>일정명</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        <label>멤버</label>
        <select name="member" value={form.member} onChange={handleChange}>
          <option value="">멤버 선택</option>
          <option value="멤버1">멤버1</option>
          <option value="멤버2">멤버2</option>
          <option value="멤버3">멤버3</option>
        </select>
      </InputField>
      <InputField>
        <label>설명</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </InputField>
      <div>
        <SaveButton onClick={onSave}>저장</SaveButton>
        <CloseButton onClick={onRequestClose}>닫기</CloseButton>
      </div>

      {/* 오버레이 스타일 */}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);  /* 배경을 반투명 검정으로 설정 */
            z-index: 1000; /* 모달보다 낮은 z-index를 설정 */
          }
        `}
      </style>
    </ModalWrapper>
  );
};

export default CustomModal;
