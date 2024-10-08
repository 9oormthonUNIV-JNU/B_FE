import React, { useEffect, useRef, useState } from "react";
import CustomText from "../../common/atoms/CustomText";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";
import icon_trash from "../../../assets/images/icon_trash.svg";
import icon_star from "../../../assets/images/icon_star.svg";
import icon_star_fill from "../../../assets/images/icon_star_fill.svg";
import { PostFormContainer, InputField } from "../organisms/Table"; // 경로에 맞게 수정

type Post = {
  id?: string;
  title: string;
  participant?: string[];
  category?: string;
  part?: string;
  date?: string;
  description: string;
  photos?: FileList;
};

type PostFormProps = {
  modalType: "project" | "study" | "seminar" | "networking";
  isEditMode: boolean; // 수정 모드 여부
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
  isEditMode,
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
    []
  );

  const modalTypeMap: { [key: string]: string } = {
    project: "프로젝트",
    study: "스터디",
    seminar: "세미나",
    networking: "네트워킹",
  };

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
            (existingFile) =>
              existingFile.name === newFile.name &&
              existingFile.lastModified === newFile.lastModified
          )
      );
      const updatedFiles = [...selectedFiles, ...nonDuplicateFiles];
      setSelectedFiles(updatedFiles);
      handleFileChange(e);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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

  useEffect(() => {
    // 수정 모드에서 초기 파일 및 기타 데이터를 설정하는 로직이 필요할 수 있습니다.
    if (isEditMode) {
      // 필요한 경우 기존 데이터를 설정할 수 있습니다.
    }
  }, [isEditMode]);

  return (
    <PostFormContainer>
      <div className="modal_type">
        <CustomText textStyle="h2">
          {modalTypeMap[modalType]} 게시글 {isEditMode ? "수정" : "작성"}
        </CustomText>
      </div>
      <div className="modal_form">
        <InputField>
          <div className="modal_label">
            <CustomText textStyle="b3">제목</CustomText>
          </div>
          <input
            type="text"
            name="title"
            placeholder="비어있음"
            value={modalForm.title}
            onChange={handleModalChange}
          />
        </InputField>

        {modalType === "project" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">참여자</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={[
                { label: "최지원", value: "최지원" },
                { label: "이현", value: "이현" },
                { label: "김민", value: "김민" },
              ]}
              multi={true}
              value={selectedParticipants}
              onChange={handleParticipantsChange}
            />
          </InputField>
        )}

        {modalType === "study" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">파트</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={[
                { label: "PM", value: "PM" },
                { label: "PD", value: "PD" },
                { label: "FE", value: "FE" },
                { label: "BE", value: "BE" },
              ]}
            />
          </InputField>
        )}

        {modalType === "project" && (
          <InputField>
            <div className="modal_label">
              <CustomText textStyle="b3">카테고리</CustomText>
            </div>
            <DropdownButton
              form={true}
              options={[
                { label: "교내프로젝트", value: "교내프로젝트" },
                { label: "외부프로젝트", value: "외부프로젝트" },
              ]}
            />
          </InputField>
        )}

        {["study", "seminar", "networking"].includes(modalType) && (
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
            <textarea
              placeholder="일정에 대해서 간단히 설명해주세요"
              name="description"
              value={modalForm.description}
              onChange={handleModalChange}
            />
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
                        <img
                          src={
                            thumbnailIndex === index
                              ? icon_star_fill
                              : icon_star
                          }
                          alt="썸네일"
                        />
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
          {isEditMode ? "수정하기" : "작성하기"}
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
