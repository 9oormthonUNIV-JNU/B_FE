import React, { useState } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CustomTag from "../../common/atoms/CustomTag";
import LabelButton from "../../common/atoms/LabelButton";

export type Post = {
  id: string;
  name: string;
  category: string;
  date: string;
};

const PostTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 100px 100px;
  font-family: "Pretendard";

  /* 말줄임표를 적용할 클래스 */
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

// 테이블 전체 스타일
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* 고정 레이아웃으로 설정 */
`;

// 테이블 헤더 스타일
const Thead = styled.thead`
  width: 100%;
  background-color: #e1ebfd;
`;

// 테이블 헤더 셀 스타일
const Th = styled.th`
  text-align: left;
  padding: 16px 12px;

  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;

  /* 각 열의 너비를 고정하거나 비율로 설정 */
  &:nth-child(1) {
    width: 40%; /* 게시글 이름 */
  }
  &:nth-child(2) {
    width: 20%; /* 카테고리 */
  }
  &:nth-child(3) {
    width: 25%; /* 등록/수정일 */
  }
  &:nth-child(4) {
    width: 15%; /* 버튼 */
  }
`;

// 테이블 바디 스타일
const Tbody = styled.tbody``;

// 테이블 행 스타일
const Tr = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

// 테이블 데이터 셀 스타일
const Td = styled.td`
  padding: 16px 12px;
  border-bottom: 1px solid black;
  word-wrap: break-word; /* 긴 텍스트 줄바꿈 */

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

// 날짜를 "YYYY. MM. DD" 형식으로 포맷팅하는 함수
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
  const postsPerPage = 10;

  // 현재 페이지에 표시할 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 페이지 번호 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 페이지 변경 핸들러
  const handleClickPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <PostTableContainer>
      <div className="post_header">
        <CustomText textStyle="b1">게시글 관리</CustomText>
        <div className="post_add">
          <LabelButton
            label="+ 게시글 추가"
            onClick={() => {
              /* 추가 버튼 클릭 시 처리 로직 */
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
              <Td className="truncate">{post.name}</Td>
              <Td className="truncate">{post.category}</Td>
              <Td className="truncate">{formatDate(post.date)}</Td>
              <Td className="post_button">
                <CustomTag
                  onClick={() => {
                    // 수정 버튼 클릭 시 처리 로직 추가
                    console.log(`수정: ${post.id}`);
                  }}
                  backgroundColor="#F7F7F7"
                  color="black"
                >
                  수정
                </CustomTag>
                <CustomTag
                  onClick={() => {
                    // 삭제 버튼 클릭 시 처리 로직 추가
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
      {/* 페이지네이션 컨트롤 */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <CustomText textStyle="b3" onClick={() => {}}>
            {"<"} 이전
          </CustomText>
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
          <CustomText onClick={() => {}} textStyle="b3">
            다음 {">"}
          </CustomText>
        </button>
      </div>
    </PostTableContainer>
  );
};

export default PostTable;
