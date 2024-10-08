import { useState } from "react";
import { MemberData as AllMembers } from "../../../constants/MemberList";
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
  const [selectedPart, setSelectedPart] = useState<string>("전체");
  const [selectedGeneration, setSelectedGeneration] = useState<string>("전체");

  const filteredMembers = AllMembers.filter((member) => {
    const isPartMatch = selectedPart === "전체" || member.part === selectedPart;
    const isGenerationMatch =
      selectedGeneration === "전체" ||
      member.generations.includes(Number(selectedGeneration.replace("기", "")));

    return isPartMatch && isGenerationMatch;
  });

  return (
    <MemberTemplateContainer>
      <div className="member_content">
        <CustomText textStyle="h1">Member</CustomText>
      </div>
      <div className="filter_button">
        <FilterButton
          filterType="파트별"
          options={["전체", "PM", "PD", "FE", "BE"]}
          onClick={(part) => {
            console.log(`파트 필터 선택: ${part}`);
            setSelectedPart(part);
          }}
        />
        <FilterButton
          filterType="기수별"
          options={["전체", "2기", "3기"]}
          onClick={(generation) => {
            console.log(`기수 필터 선택: ${generation}`);
            setSelectedGeneration(generation);
          }}
        />
      </div>
      <MemberBoxes MemberData={filteredMembers} />
    </MemberTemplateContainer>
  );
};

export default MemberTemplate;
