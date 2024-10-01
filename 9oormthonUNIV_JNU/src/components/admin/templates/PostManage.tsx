import React from "react";
import styled from "styled-components";
import PostTable from "../organisms/PostTable";

export type Post = {
  id: string;
  name: string;
  category: string;
  date: string;
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
`;

const PostManage: React.FC = () => {
  const samplePosts: Post[] = [
    {
      id: "1",
      name: "React Hooks 이해하기",
      category: "프론트엔드",
      date: "2024-04-20T14:30:00Z",
    },
    {
      id: "2",
      name: "TypeScript 기초",
      category: "프로그래밍",
      date: "2024-04-18T09:15:00Z",
    },
    {
      id: "3",
      name: "Styled-components 사용법",
      category: "디자인",
      date: "2024-04-22T16:45:00Z",
    },
    // 추가적인 게시글 데이터...
    // 10개 이상의 게시글을 추가하여 페이지네이션을 테스트하세요.
    {
      id: "4",
      name: "JavaScript 고급 개념",
      category: "프로그래밍",
      date: "2024-04-25T10:00:00Z",
    },
    {
      id: "5",
      name: "CSS Flexbox와 Grid",
      category: "디자인",
      date: "2024-04-27T11:30:00Z",
    },
    {
      id: "6",
      name: "Node.js 기본",
      category: "백엔드",
      date: "2024-04-28T09:00:00Z",
    },
    {
      id: "7",
      name: "React Router 사용법",
      category: "프론트엔드",
      date: "2024-04-29T15:45:00Z",
    },
    {
      id: "8",
      name: "Redux 상태 관리",
      category: "프론트엔드",
      date: "2024-04-30T14:00:00Z",
    },
    {
      id: "9",
      name: "Express.js 서버 구축",
      category: "백엔드",
      date: "2024-05-01T13:30:00Z",
    },
    {
      id: "10",
      name: "GraphQL 기초",
      category: "백엔드",
      date: "2024-05-02T10:15:00Z",
    },
    {
      id: "11",
      name: "TypeScript 제네릭",
      category: "프로그래밍",
      date: "2024-05-03T12:45:00Z",
    },
  ];

  return (
    <Container>
      <PostTable posts={samplePosts} />
    </Container>
  );
};

export default PostManage;
