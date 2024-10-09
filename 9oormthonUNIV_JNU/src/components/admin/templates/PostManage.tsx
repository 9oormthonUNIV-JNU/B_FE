import React from "react";
import styled from "styled-components";
import PostTable from "../organisms/PostTable";

export type Post = {
  id: number;
  title: string;
  category: "seminar" | "networking" | "project" | "study";
  date: string;
  participant: string[];
  description: string;
  photos?: string[];
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
      participant: ["최지원", "김민수"],
      description: "React Hooks의 기초 개념을 이해하고 실습해보는 시간입니다.",
      photos: ["https://via.placeholder.com/150"],
    },
    {
      id: 2,
      title: "TypeScript 기초",
      category: "study",
      date: "2024-04-18T09:15:00Z",
      participant: ["이현", "박수진"],
      description:
        "TypeScript의 기초 문법과 타입 시스템을 배우는 스터디입니다.",
      photos: ["https://via.placeholder.com/150"],
    },
    {
      id: 3,
      title: "Styled-components 사용법",
      category: "networking",
      date: "2024-04-22T16:45:00Z",
      participant: ["최지원", "김민수", "박수진"],
      description:
        "Styled-components를 사용한 CSS-in-JS 스타일링 방법을 공유합니다.",
      photos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      id: 4,
      title: "JavaScript 고급 개념",
      category: "project",
      date: "2024-04-25T10:00:00Z",
      participant: ["최지원"],
      description:
        "JavaScript의 고급 개념을 다루고, 프로젝트에 적용해보는 시간입니다.",
    },
    {
      id: 5,
      title: "CSS Flexbox와 Grid",
      category: "project",
      date: "2024-04-27T11:30:00Z",
      description: "CSS Flexbox와 Grid 레이아웃 시스템에 대해 배워봅니다.",
      participant: ["박수진"],
    },
    {
      id: 6,
      title: "Node.js 기본",
      category: "project",
      date: "2024-04-28T09:00:00Z",
      participant: ["이현", "김민수"],
      description:
        "Node.js를 사용하여 기본적인 서버 구축과 API 생성 방법을 익힙니다.",
    },
    {
      id: 7,
      title: "React Router 사용법",
      category: "project",
      date: "2024-04-29T15:45:00Z",
      participant: ["최지원"],
      description:
        "React Router를 사용하여 SPA의 라우팅을 처리하는 방법을 배우는 시간입니다.",
      photos: ["https://via.placeholder.com/150"],
    },
    {
      id: 8,
      title: "Redux 상태 관리",
      category: "project",
      date: "2024-04-30T14:00:00Z",
      description:
        "Redux를 사용하여 상태 관리를 효과적으로 처리하는 방법을 학습합니다.",
      participant: ["이현", "김민수", "박수진"],
    },
    {
      id: 9,
      title: "Express.js 서버 구축",
      category: "project",
      date: "2024-05-01T13:30:00Z",
      description:
        "Express.js를 사용하여 서버를 구축하고 RESTful API를 구현합니다.",
      participant: ["김민수"],
    },
    {
      id: 10,
      title: "GraphQL 기초",
      category: "project",
      date: "2024-05-02T10:15:00Z",
      participant: ["최지원", "이현"],
      description:
        "GraphQL을 사용하여 효율적인 API를 설계하고 사용하는 방법을 학습합니다.",
    },
    {
      id: 11,
      title: "TypeScript 제네릭",
      category: "project",
      date: "2024-05-03T12:45:00Z",
      description:
        "TypeScript에서 제네릭을 사용하는 방법과 실제 사례를 살펴봅니다.",
      participant: ["최지원", "이현"],
      photos: ["https://via.placeholder.com/150"],
    },
  ];

  return (
    <Container>
      <PostTable posts={samplePosts} />
    </Container>
  );
};

export default PostManage;
