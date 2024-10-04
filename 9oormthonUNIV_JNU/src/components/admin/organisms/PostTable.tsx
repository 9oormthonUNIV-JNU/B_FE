import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import LabelButton from "../../common/atoms/LabelButton";
import CustomModal from "../atoms/CustomModal";
import PostForm from "../molecules/PostForm";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomButton from "../../common/atoms/CustomButton";

export type Post = {
  id: string;
  name: string;
  category: "세미나" | "네트워킹" | "프로젝트" | "스터디";
  date: string;
};

const PostTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Pretendard";

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .post_header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    gap: 8px;
  }

  .pagination button {
    padding: 8px 12px;
    background-color: white;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;

    font-size: 16px;
    font-weight: 500;
    line-height: 30px;

    &:disabled {
      cursor: not-allowed;
      background-color: white;
    }
  }

  .pagination .page-number {
    padding: 8px 12px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 4px;

    font-size: 20px;
    font-weight: 500;
    line-height: 30px;

    &.active {
      border: 1px solid #c3c3c3;
      color: #778fb9;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const Thead = styled.thead`
  width: 100%;
  background-color: #e1ebfd;
`;

const Th = styled.th`
  text-align: left;
  padding: 16px 12px;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;

  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 25%;
  }
  &:nth-child(4) {
    width: 15%;
  }
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Td = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid black;
  word-wrap: break-word;

  color: #484848;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;

  .post_button {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

const CategoryModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
`;

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}. ${month}. ${day}`;
};

type PostTableProps = {
  posts: Post[];
};

const PostTable: React.FC<PostTableProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isPostFormModalOpen, setIsPostFormModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    "프로젝트" | "스터디" | "세미나" | "네트워킹"
  >("프로젝트");
  const [modalForm, setModalForm] = useState({
    name: "",
    description: "",
    photos: undefined,
  });

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

  const handleModalSave = () => {
    console.log("Modal Form Data: ", modalForm);
    setIsPostFormModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log("Selected files: ", files);
    }
  };

  const handleCategoryChange = (selected: string | string[]) => {
    // 단일 선택일 경우 selected는 string, 다중 선택일 경우 string[]
    if (typeof selected === "string") {
      setSelectedCategory(
        selected as "프로젝트" | "스터디" | "세미나" | "네트워킹"
      );
    } else {
      // 다중 선택인 경우 첫 번째 선택된 값을 사용하거나 필요에 따라 처리
      setSelectedCategory(
        selected[0] as "프로젝트" | "스터디" | "세미나" | "네트워킹"
      );
    }
  };

  const handleCategorySubmit = () => {
    setIsCategoryModalOpen(false);
    setIsPostFormModalOpen(true);
  };

  return (
    <PostTableContainer>
      <div className="post_header">
        <CustomText textStyle="b1">게시글 관리</CustomText>
        <div className="post_add">
          <LabelButton
            label="+ 게시글 추가"
            onClick={() => setIsCategoryModalOpen(true)}
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
              <Td className="truncate">{post.name}</Td>
              <Td className="truncate">{post.category}</Td>
              <Td className="truncate">{formatDate(post.date)}</Td>
              <Td className="post_button">
                <CustomTag
                  onClick={() => {
                    console.log(`수정: ${post.id}`);
                  }}
                  backgroundColor="#F7F7F7"
                  color="black"
                >
                  수정
                </CustomTag>
                <CustomTag
                  onClick={() => {
                    console.log(`삭제: ${post.id}`);
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
            options={["프로젝트", "스터디", "세미나", "네트워킹"]}
            onChange={handleCategoryChange} // 이벤트 핸들러 변경
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
