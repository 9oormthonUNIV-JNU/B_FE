import { MemberData } from "../../../constants/MemberList";
import MemberBoxes from "../organisms/MemberBoxes";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import FilterButton from "../atoms/FilterButton";

const MemberTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  .member_content {
    padding: 80px;
    marginbotton:71px;
  }

  .filter_button {
  display: flex;
  flex-direction:row;
  padding-bottom: 100px;
  gap: 21px;
  }
`;

const MemberTemplate = () => {
return (
    <MemberTemplateContainer>
      <div className="member_content">
      <CustomText textStyle="h1">Member</CustomText>
      </div>
      <div className="filter_button">
      <FilterButton filterType="파트별"/>
      <FilterButton filterType="기수별"/>
      </div>
      
    <MemberBoxes MemberData={MemberData}/>
    </MemberTemplateContainer>
);

};

export default MemberTemplate;
