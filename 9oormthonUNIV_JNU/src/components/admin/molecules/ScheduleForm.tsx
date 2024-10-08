import React from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";

const ScheduleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .modal_type {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .modal_form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .modal_button {
    display: flex;
    flex-direction: row;
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

type ScheduleFormProps = {
  modalType: "일정 추가하기" | "일정 수정하기";
  modalForm: Schedule;
  handleModalChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSave: () => void;
  onRequestClose: () => void;
};

const ScheduleForm: React.FC<ScheduleFormProps> = ({
  modalType,
  modalForm,
  handleModalChange,
  onSave,
  onRequestClose,
}) => {
  return (
    <ScheduleFormContainer>
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
            options={[
              { label: "최지원", value: "최지원" },
              { label: "최지원", value: "최지원" },
              { label: "최지원", value: "최지원" },
            ]}
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
    </ScheduleFormContainer>
  );
};

export default ScheduleForm;
