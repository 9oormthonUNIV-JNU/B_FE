import React from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";

const PostFormContainer = styled.div`
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
  input[type="file"],
  textarea {
    font-family: "Pretendard";
    font-size: 16px;
    padding: 10px;
    border: none;
    width: 100%;
  }

  input[type="date"],
  input[type="file"] {
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

type Post = {
  name: string;
  participant?: string;
  category?: string;
  part?: string;
  date?: string;
  description: string;
  photos?: FileList;
};

type PostFormProps = {
  modalType: "프로젝트" | "스터디" | "세미나" | "네트워킹";
  modalForm: Post;
  handleModalChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onRequestClose: () => void;
};

const PostForm: React.FC<PostFormProps> = ({
  modalType,
  modalForm,
  handleModalChange,
  handleFileChange,
  onSave,
  onRequestClose,
}) => {
  return (
    <PostFormContainer>
      <div className="modal_type">
        <CustomText textStyle="h2">{modalType} 게시글 작성</CustomText>
      </div>
      <div className="modal_form">
        {/* 공통 제목 필드 */}
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">제목</CustomText>
          </div>
          <input
            type="text"
            name="name"
            placeholder="비어있음"
            value={modalForm.name}
            onChange={handleModalChange}
          />
        </InputField>

        {/* 조건부 필드: 참여자 또는 파트 */}
        {modalType === "프로젝트" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">참여자</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={["최지원", "최지원", "최지원"]}
              // onChange event should be handled here
            />
          </InputField>
        )}

        {modalType === "스터디" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">파트</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={["PM", "PD", "FE", "BE"]}
              // onChange event should be handled here
            />
          </InputField>
        )}

        {/* 조건부 필드: 카테고리 */}
        {modalType === "프로젝트" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">카테고리</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={["교내프로젝트", "외부프로젝트"]}
              // onChange event should be handled here
            />
          </InputField>
        )}

        {/* 조건부 필드: 날짜 */}
        {["스터디", "세미나", "네트워킹"].includes(modalType) && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">날짜</CustomText>
            </div>
            <input
              type="date"
              name="date"
              value={modalForm.date || ""}
              onChange={handleModalChange}
            />
          </InputField>
        )}

        {/* 공통 설명 필드 */}
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

        {/* 공통 사진 업로드 필드 */}
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">사진</CustomText>
          </div>
          <input
            type="file"
            name="photos"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </InputField>
      </div>

      {/* 버튼 */}
      <div className="modal_button">
        <CustomButton onClick={onSave} radius={10} width={200} height={46}>
          작성하기
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
    </PostFormContainer>
  );
};

export default PostForm;
