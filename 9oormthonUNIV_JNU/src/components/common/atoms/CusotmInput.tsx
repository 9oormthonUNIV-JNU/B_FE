import styled from "styled-components";

const CustomInput = styled.input`
  display: flex;
  border-radius: 20px;
  border-style: none;
  background-color: #f7f7f7;
  height: 70px;
  padding: 20px 30px;
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;

  ::placeholder {
    color: #797979;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 20px;
  }

  &:hover {
    box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(159, 190, 247, 0.5); /* 포커스 시 그림자 강조 */
  }
`;

export default CustomInput;
