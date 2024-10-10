import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomButton from "../../common/atoms/CustomButton";
import DropdownButton from "../../common/atoms/DropdownButton";
import { instance } from "../../../apis/instance";

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

  .modal_error {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
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

type Member = {
  name: string;
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [memberList, setMemberList] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await instance.get("/api/user");
        if (response.data.status === "success") {
          const members = response.data.response;
          const memberOptions = members
            .map((member: Member) => ({
              label: member.name,
              value: member.name,
            }))
            .sort(
              (
                a: { label: string; value: string },
                b: { label: string; value: string }
              ) => a.label.localeCompare(b.label)
            );
          setMemberList(memberOptions);
        } else {
          console.error("멤버 목록을 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("멤버 목록을 가져오는 데 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const handleMemberChange = (selected: string[]) => {
    handleModalChange({
      target: { name: "member", value: selected.join(", ") },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSave = async () => {
    if (
      !modalForm.date ||
      !modalForm.name ||
      !modalForm.member ||
      !modalForm.description
    ) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    setError(null);

    const participants = modalForm.member
      .split(", ")
      .map((name) => name.trim());

    try {
      const response = await instance.post("/api/schedule/add", {
        name: modalForm.name,
        period: modalForm.date,
        participants: participants,
        content: modalForm.description,
      });

      if (response.data.status === "success") {
        alert("일정이 추가되었습니다.");
        onSave();
      } else {
        console.error("일정 추가에 실패했습니다.");
        setError("일정 추가에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("일정 추가 요청 중 오류 발생:", error);
      setError("요청 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

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
          {loading ? (
            <CustomText textStyle="b3">
              멤버 목록을 불러오는 중입니다...
            </CustomText>
          ) : (
            <DropdownButton
              options={memberList}
              value={modalForm.member.split(", ")}
              onChange={handleMemberChange}
              multi={true}
              form={true}
            />
          )}
        </InputField>
        <InputField>
          <div className="modal_description">
            <div className="modal_label">
              <CustomText textStyle="b3">설명</CustomText>
            </div>
            <textarea
              name="description"
              placeholder="일정에 대해서 간단히 설명해주세요"
              value={modalForm.description}
              onChange={handleModalChange}
            />
          </div>
        </InputField>
      </div>
      {error && (
        <div className="modal_error">
          <CustomText textStyle="b3" color="#FF6D57">
            {error}
          </CustomText>
        </div>
      )}
      <div className="modal_button">
        <CustomButton
          onClick={!loading ? handleSave : undefined}
          radius={10}
          width={200}
          height={46}
        >
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
