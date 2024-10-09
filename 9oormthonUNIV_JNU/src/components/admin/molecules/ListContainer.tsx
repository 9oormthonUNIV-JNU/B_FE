import styled from "styled-components";

export const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .memberlist {
    margin-bottom: 20px;
    margin-left: 10px;
  }

  .pending_none {
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;
