import React from "react";
import styled from "styled-components";
import PostTable from "../organisms/PostTable";

export type Post = {
  id: number;
  title: string;
  category: "seminar" | "networking" | "project" | "study";
  date: string;
};

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const PostManage: React.FC = () => {
  const samplePosts: Post[] = [
    {
      id: 1,
      title: "React Hooks 이해하기",
      category: "seminar",
      date: "2024-04-20T14:30:00Z",
    },
    {
      id: 2,
      title: "TypeScript 기초",
      category: "study",
      date: "2024-04-18T09:15:00Z",
    },
    {
      id: 3,
      title: "Styled-components 사용법",
      category: "networking",
      date: "2024-04-22T16:45:00Z",
    },
    {
      id: 4,
      title: "JavaScript 고급 개념",
      category: "project",
      date: "2024-04-25T10:00:00Z",
    },
    {
      id: 5,
      title: "CSS Flexbox와 Grid",
      category: "project",
      date: "2024-04-27T11:30:00Z",
    },
    {
      id: 6,
      title: "Node.js 기본",
      category: "project",
      date: "2024-04-28T09:00:00Z",
    },
    {
      id: 7,
      title: "React Router 사용법",
      category: "project",
      date: "2024-04-29T15:45:00Z",
    },
    {
      id: 8,
      title: "Redux 상태 관리",
      category: "project",
      date: "2024-04-30T14:00:00Z",
    },
    {
      id: 9,
      title: "Express.js 서버 구축",
      category: "project",
      date: "2024-05-01T13:30:00Z",
    },
    {
      id: 10,
      title: "GraphQL 기초",
      category: "project",
      date: "2024-05-02T10:15:00Z",
    },
    {
      id: 11,
      title: "TypeScript 제네릭",
      category: "project",
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
