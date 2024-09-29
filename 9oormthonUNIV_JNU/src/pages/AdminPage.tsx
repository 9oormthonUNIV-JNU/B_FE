import MenuBar from "../components/general/atoms/MenuBar";
import MemberManage from "../components/admin/templates/MemberManage";
import PostManage from "../components/admin/templates/PostManage";
import ScheduleManage from "../components/admin/templates/ScheduleManage";
import { useState } from "react";
import styled from "styled-components";
import CustomText from "../components/common/atoms/CustomText";

const AdminPageConatiner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 90px;
  flex-direction: column;
  justify-content: center;

  .admin {
    margin-bottom: 30px;
  }
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
      <div>{renderContent()}</div>
    </AdminPageConatiner>
  );
};

export default AdminPage;

{
  /* <MenuBar
        options={["회원 관리", "일정 관리", "게시글 관리"]}
        onOptionClick={setSelectedMenu}
      /> */
}
