import styled from "styled-components";

export const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 60px;

  .memberlist {
    margin-bottom: 20px;
    margin-left: 10px;
  }
`;

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;
