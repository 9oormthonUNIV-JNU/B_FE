import React, { useState } from "react";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import LabelButton from "../../common/atoms/LabelButton";
import CustomModal from "../atoms/CustomModal";
import PostForm from "../molecules/PostForm";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";
import { instance } from "../../../apis/instance";

import {
  PostTableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  CategoryModal,
} from "./Table";

export type Post = {
  id: number;
  title: string;
  category: "seminar" | "networking" | "project" | "study";
  date: string;
  description: string;
};

interface ModalForm {
  title: string;
  description: string;
  photos: FileList | undefined;
}

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const translateCategory = (category: string): string => {
  switch (category) {
    case "project":
      return "프로젝트";
    case "study":
      return "스터디";
    case "seminar":
      return "세미나";
    case "networking":
      return "네트워킹";
    default:
      return category;
  }
};

type PostTableProps = {
  posts: Post[];
};

const PostTable: React.FC<PostTableProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isPostFormModalOpen, setIsPostFormModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "project" | "study" | "seminar" | "networking"
  >("project");
  const [modalForm, setModalForm] = useState<ModalForm>({
    title: "",
    description: "",
    photos: undefined,
  });
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value });
  };

  const handleModalSave = async () => {
    const postData = {
      title: modalForm.title,
      description: modalForm.description,
      photos: modalForm.photos,
      category: selectedCategory,
    };

    if (selectedPostId !== null) {
      await updatePost(selectedPostId, postData);
    } else {
      await createPost(postData);
    }

    setIsPostFormModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Selected files: ", files);
    }
  };

  const handleCategoryChange = (selected: string | string[]) => {
    if (typeof selected === "string") {
      setSelectedCategory(
        selected as "project" | "study" | "seminar" | "networking"
      );
    } else {
      setSelectedCategory(
        selected[0] as "project" | "study" | "seminar" | "networking"
      );
    }
  };

  const handleCategorySubmit = () => {
    setIsCategoryModalOpen(false);
    setIsPostFormModalOpen(true);
  };

  const createPost = async (postData: ModalForm): Promise<void> => {
    try {
      const response = await instance.post("/api/post", postData);
      if (response.data.status === "success") {
        console.log("게시글 등록 성공", response.data.response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (
    postId: number,
    updatedPostData: ModalForm
  ): Promise<void> => {
    try {
      const response = await instance.patch(
        `/api/post/${postId}`,
        updatedPostData
      );
      if (response.data.status === "success") {
        console.log("게시글 수정 성공", response.data.response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (postId: number): Promise<void> => {
    try {
      const response = await instance.delete(`/api/post/${postId}`);
      if (response.data.status === "success") {
        console.log("게시글 삭제 성공", response.data.response);
      }
    } catch (error) {
      console.log("게시글 삭제 실패", error);
    }
  };

  return (
    <PostTableContainer>
      <div className="post_header">
        <CustomText textStyle="b1">게시글 관리</CustomText>
        <div className="post_add">
          <LabelButton
            label="+ 게시글 추가"
            onClick={() => {
              setSelectedPostId(null);
              setModalForm({ title: "", description: "", photos: undefined });
              setIsCategoryModalOpen(true);
            }}
          />
        </div>
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th className="post_name">게시글 이름</Th>
            <Th className="post_category">카테고리</Th>
            <Th className="post_registeration">등록/수정일</Th>
            <Th className="post_buttons">{""}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentPosts.map((post) => (
            <Tr key={post.id}>
              <Td className="truncate">{post.title}</Td>
              <Td className="truncate">{translateCategory(post.category)}</Td>
              <Td className="truncate">{formatDate(post.date)}</Td>
              <Td className="post_button">
                <CustomTag
                  onClick={() => {
                    setModalForm({
                      title: post.title,
                      description: post.description || "",
                      photos: undefined,
                    });
                    setSelectedPostId(post.id);
                    setIsPostFormModalOpen(true);
                  }}
                  backgroundColor="#F7F7F7"
                  color="black"
                >
                  수정
                </CustomTag>
                <CustomTag
                  onClick={async () => {
                    if (window.confirm("정말 삭제하시겠습니까?")) {
                      await deletePost(post.id);
                    }
                  }}
                  backgroundColor="#F7F7F7"
                  color="#FF6D57"
                >
                  삭제
                </CustomTag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <CustomText textStyle="b3">{"<"} 이전</CustomText>
        </button>
        {pageNumbers.map((number) => (
          <span
            key={number}
            className={`page-number ${currentPage === number ? "active" : ""}`}
            onClick={() => handleClickPage(number)}
            style={{ userSelect: "none" }}
          >
            {number}
          </span>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <CustomText textStyle="b3">다음 {">"}</CustomText>
        </button>
      </div>

      {/* 카테고리 선택 모달 */}
      <CustomModal
        isOpen={isCategoryModalOpen}
        onRequestClose={() => setIsCategoryModalOpen(false)}
      >
        <CategoryModal>
          <CustomText textStyle="b2">
            작성할 게시글의 카테고리를 선택하세요
          </CustomText>
          <DropdownButton
            options={[
              { label: "프로젝트", value: "project" },
              { label: "스터디", value: "study" },
              { label: "세미나", value: "seminar" },
              { label: "네트워킹", value: "networking" },
            ]}
            onChange={handleCategoryChange}
          />
          <CustomButton onClick={handleCategorySubmit}>확인</CustomButton>
        </CategoryModal>
      </CustomModal>

      {/* 게시글 작성 모달 */}
      {isPostFormModalOpen && (
        <CustomModal
          isOpen={isPostFormModalOpen}
          onRequestClose={() => setIsPostFormModalOpen(false)}
        >
          <PostForm
            isEditMode={selectedPostId !== null}
            modalType={selectedCategory}
            modalForm={modalForm}
            handleModalChange={handleModalChange}
            handleFileChange={handleFileChange}
            onSave={handleModalSave}
            onRequestClose={() => setIsPostFormModalOpen(false)}
          />
        </CustomModal>
      )}
    </PostTableContainer>
  );
};

export default PostTable;
