import styled from "styled-components";

export const PostTableContainer = styled.div`
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Thead = styled.thead`
  width: 100%;
  background-color: #e1ebfd;
`;

export const Th = styled.th`
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

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const Td = styled.td`
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

export const CategoryModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
`;

export const PostFormContainer = styled.div`
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

export const InputField = styled.div`
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
