import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";

const ModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 60px;
  border-radius: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;

  .modal_type {
    margin-bottom: 40px;
  }

  .modal_form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }

  .modal_button {
    display: flex;
    flex: row;
    justify-content: center;
    gap: 10px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .modal_description {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px 0px 30px;
  }

  .modal_label {
    width: 80px;
  }

  input[type="date"],
  input[type="text"],
  textarea {
    font-family: "Pretendard";
    font-size: 16px;
    padding: 10px;
    border: none;
    width: 100%;
  }

  input[type="date"] {
    cursor: pointer;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: "Pretendard";
    color: #9c9c9c;
  }

  textarea {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    height: 125px;
    margin-top: 5px;
    border: none;
    background-color: #f7f7f7;
    resize: none;
  }
`;

type Schedule = {
  date: string;
  name: string;
  member: string;
  description: string;
};

type CustomModalProps = {
  modalType: "일정 추가하기" | "일정 수정하기";
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: () => void;
  modalForm: Schedule;
  handleModalChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
};

const CustomModal: React.FC<CustomModalProps> = ({
  modalType,
  isOpen,
  onRequestClose,
  onSave,
  modalForm,
  handleModalChange,
}) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
    >
      <div className="modal_type">
        <CustomText textStyle="h2">{modalType}</CustomText>
      </div>
      <div className="modal_form">
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">날짜</CustomText>
          </div>
          <input
            className="modal_date"
            type="date"
            name="date"
            value={modalForm.date}
            onChange={handleModalChange}
          />
        </InputField>
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">일정명</CustomText>
          </div>
          <input
            type="text"
            name="name"
            placeholder="비어있음"
            value={modalForm.name}
            onChange={handleModalChange}
          />
        </InputField>
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">참석자</CustomText>
          </div>
          <DropdownButton
            form={true}
            options={["최지원", "최지원", "최지원"]}
          />
        </InputField>
        <InputField>
          <div className="modal_description">
            <div className="modal_label">
              <CustomText textStyle="b3">설명</CustomText>
            </div>
            <div>
              <textarea
                placeholder="일정에 대해서 간단히 설명해주세요"
                name="description"
                value={modalForm.description}
                onChange={handleModalChange}
              />
            </div>
          </div>
        </InputField>
      </div>
      <div className="modal_button">
        <CustomButton onClick={onSave} radius={10} width={200} height={46}>
          {modalType === "일정 추가하기" ? "추가하기" : "수정하기"}
        </CustomButton>
        <CustomButton
          onClick={onRequestClose}
          radius={10}
          width={200}
          height={46}
          bgColor="white"
          borderColor="#9C9C9C"
        >
          취소하기
        </CustomButton>
      </div>

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }
        `}
      </style>
    </ModalWrapper>
  );
};

export default CustomModal;
