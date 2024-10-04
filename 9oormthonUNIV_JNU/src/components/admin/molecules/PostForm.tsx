import React, { useRef, useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";
import icon_trash from "../../../assets/images/icon_trash.svg";
import icon_star from "../../../assets/images/icon_star.svg";

const PostFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Pretendard";

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
    margin-top: 30px;
  }
`;

const InputField = styled.div`
  display: flex;
  align-items: center;

  .modal_description {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px 0px;
  }

  .modal_image {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    .modal_select {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }

    .selected_images {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 40px;
      max-height: 150px;
      overflow-y: auto;
      width: 100%;
    }

    .image_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-basis: calc(50% - 20px);
      font-size: 14px;
      color: #333;
    }

    .image_button {
      display: flex;
      gap: 4px;
    }

    .thumbnail_button,
    .remove_button {
      cursor: pointer;
    }

    .thumbnail_button img,
    .remove_button img {
      width: 20px;
      height: 20px;
    }
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

  .file_input {
    display: none;
  }
`;

type Post = {
  name: string;
  participant?: string[];
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
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [thumbnailIndex, setThumbnailIndex] = useState<number | null>(null);
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>(
    modalForm.participant || []
  );

  const handleClickFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFilesArray = Array.from(files);
      const nonDuplicateFiles = newFilesArray.filter(
        (newFile) =>
          !selectedFiles.some(
            (existingFile) => existingFile.name === newFile.name
          )
      );
      const updatedFiles = [...selectedFiles, ...nonDuplicateFiles];
      setSelectedFiles(updatedFiles);
      handleFileChange(e);
    }
  };

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);

    if (thumbnailIndex === indexToRemove) {
      setThumbnailIndex(null);
    } else if (thumbnailIndex !== null && thumbnailIndex > indexToRemove) {
      setThumbnailIndex(thumbnailIndex - 1);
    }
  };

  const setThumbnail = (index: number) => {
    setThumbnailIndex(index);
  };

  const handleParticipantsChange = (selected: string[]) => {
    setSelectedParticipants(selected);
  };

  return (
    <PostFormContainer>
      <div className="modal_type">
        <CustomText textStyle="h2">{modalType} 게시글 작성</CustomText>
      </div>
      <div className="modal_form">
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

        {modalType === "프로젝트" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">참여자</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={["최지원", "이현", "김민"]}
              multi={true}
              value={selectedParticipants}
              onChange={handleParticipantsChange}
            />
          </InputField>
        )}

        {modalType === "스터디" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">파트</CustomText>
            </div>
            <DropdownButton form={true} options={["PM", "PD", "FE", "BE"]} />
          </InputField>
        )}

        {modalType === "프로젝트" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">카테고리</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={["교내프로젝트", "외부프로젝트"]}
            />
          </InputField>
        )}

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

        <InputField>
          <div className="modal_image">
            <div className="modal_select">
              <div className="modal_label">
                <CustomText textStyle="b3">사진 첨부</CustomText>
              </div>
              <input
                type="file"
                name="photos"
                accept="image/*"
                multiple
                onChange={handleFilesSelected}
                className="file_input"
                ref={fileInputRef}
              />
              <CustomButton
                radius={10}
                textColor="#9C9C9C"
                bgColor="#F7F7F7"
                borderColor="#9c9c9c"
                onClick={handleClickFileInput}
                height={40}
                width={90}
              >
                사진 찾기
              </CustomButton>
            </div>

            <div className="selected_images">
              {selectedFiles.length > 0 &&
                selectedFiles.map((file, index) => (
                  <div key={index} className="image_item">
                    <CustomText textStyle="nav">{file.name}</CustomText>
                    <span className="image_button">
                      <span
                        className="thumbnail_button"
                        onClick={() => setThumbnail(index)}
                      >
                        <img src={icon_star} alt="대표사진 설정" />
                      </span>
                      <span
                        className="remove_button"
                        onClick={() => removeFile(index)}
                      >
                        <img src={icon_trash} alt="삭제" />
                      </span>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </InputField>
      </div>

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
