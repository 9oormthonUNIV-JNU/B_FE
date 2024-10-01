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
  margin: 0 auto;

  .member_content {
    margin: 60px 0px;
    padding: 80px;
    margin-bottom: 0px;
  }

  .filter_button {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
  }
`;

const MemberTemplate = () => {
  return (
    <MemberTemplateContainer>
      <div className="member_content">
        <CustomText textStyle="h1">Member</CustomText>
      </div>
      <div className="filter_button">
        <FilterButton
          filterType="파트별"
          options={["전체", "PM", "PD", "FE", "BE"]}
        />
        <FilterButton filterType="기수별" options={["전체", "2기", "3기"]} />
      </div>
      <MemberBoxes MemberData={MemberData} />
    </MemberTemplateContainer>
  );
};

export default MemberTemplate;
