import MenuBar from "../components/general/atoms/MenuBar";
import MemberManage from "../components/admin/templates/MemberManage";
import PostManage from "../components/admin/templates/PostManage";
import ScheduleManage from "../components/admin/templates/ScheduleManage";
import { useState } from "react";
import styled from "styled-components";
import CustomText from "../components/common/atoms/CustomText";

const AdminPageConatiner = styled.div`
  display: flex;
  margin: 90px 0px 150px 150px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  .admin_content {
    margin-top: 80px;
    margin-bottom: 130px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
  }
`;

const MenubarContainer = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
`;

const AdminTemplate = styled.div`
  display: flex;
  width: 70%;
`;

const AdminPage = () => {
  const [selectedMenu, setSelectedMenu] = useState("일정 관리");

  const renderContent = () => {
    switch (selectedMenu) {
      case "회원 관리":
        return <MemberManage />;
      case "일정 관리":
        return <ScheduleManage />;
      case "게시글 관리":
        return <PostManage />;
      default:
        return <MemberManage />;
    }
  };

  return (
    <AdminPageConatiner>
      <div className="admin">
        <CustomText textStyle="h1">Admin Page</CustomText>
      </div>
      <div className="admin_content">
        <MenubarContainer>
          <MenuBar
            options={["회원 관리", "일정 관리", "게시글 관리"]}
            onOptionClick={setSelectedMenu}
          />
        </MenubarContainer>
        <AdminTemplate>{renderContent()}</AdminTemplate>
      </div>
    </AdminPageConatiner>
  );
};

export default AdminPage;
