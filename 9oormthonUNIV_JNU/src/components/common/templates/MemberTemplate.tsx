import { useState, useEffect } from "react";
import MemberBoxes from "../organisms/MemberBoxes";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import FilterButton from "../atoms/FilterButton";
import { instance } from "../../../apis/instance";

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
  const [members, setMembers] = useState<any[]>([]);
  const [selectedPart, setSelectedPart] = useState<string>("전체");
  const [selectedGeneration, setSelectedGeneration] = useState<string>("전체");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // API 호출을 위한 useEffect
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await instance.get("/members"); // instance 사용
        const responseData = response.data.response;

        // API 응답 데이터를 상태로 설정
        const formattedMembers = responseData.map((member: any) => ({
          image: member.imageURL,
          name: member.name,
          generations: [member.cardinal],
          part: member.part,
        }));

        setMembers(formattedMembers);
        setError(null);
      } catch (error) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // 필터링된 멤버 데이터
  const filteredMembers = members.filter((member) => {
    const isPartMatch = selectedPart === "전체" || member.part === selectedPart;
    const isGenerationMatch =
      selectedGeneration === "전체" ||
      member.generations.includes(Number(selectedGeneration.replace("기", "")));

    return isPartMatch && isGenerationMatch;
  });

  if (loading) {
    return <CustomText textStyle="h2">로딩 중...</CustomText>;
  }

  if (error) {
    return <CustomText textStyle="h2" color="red">{error}</CustomText>;
  }

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
