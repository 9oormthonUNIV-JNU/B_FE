import React, { useState } from 'react';
import styled from 'styled-components';
import EditMyInfo from '../components/general/templates/EditMyInfo';
import PasswordChange from '../components/general/templates/PasswordChange';
import MenuBar from '../components/general/atoms/MenuBar';
import CustomText from '../components/common/atoms/CustomText';

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;

  .mypage{
  display: flex;
   flex-direction: column;
   padding: 80px;
  margin-bottom: 20px;
  align-items:center;

  }

`;
const MyPageContent = styled.div`
display:flex;
flex-direction:row;
`
const MenubarContainer = styled.div`
  width: 20%;
padding-left:100px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const MyPage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("내 정보 수정");

  const renderContent = () => {
    switch (selectedMenu) {
      case "내 정보 수정":
        return <EditMyInfo />;
      case "비밀번호 변경":
        return <PasswordChange />;
      default:
        return <EditMyInfo />;
    }
  };


  return (
    <MyPageContainer>
      <div className='mypage'>
        <CustomText textStyle='h1'>My Page</CustomText>
      </div>
      <MyPageContent>
        <MenubarContainer>
          <MenuBar
            options={["내 정보 수정", "비밀번호 변경",]}
            onOptionClick={setSelectedMenu}
          />
        </MenubarContainer>

        <Content>
          {renderContent()}
        </Content>
      </MyPageContent>
    </MyPageContainer>
  );
};

export default MyPage;
