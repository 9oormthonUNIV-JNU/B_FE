import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import CircledImage from "../atoms/CircledImage";
import DropdownButton from "../../common/atoms/DropdownButton";
import CustomInput from "../../common/atoms/CustomInput";
import CustomButton from "../../common/atoms/CustomButton";
import EmailInput from "../molecules/EmailInput";
import { instance } from "../../../apis/instance";

type UserProfile = {
  name: string;
  email: string;
  profileImage?: string;
  part: string;
  cardinal: string;
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;

  .imageContainer {
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
    object-fit: fill;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 50px;
  }

  .mypage_content {
    padding: 80px;
  }

  .editbutton {
    margin-top: 80px;
    margin-bottom: 150px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 10px;

  .Inputgap {
    margin-bottom: 20px;
  }
`;

const EmptyStateContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  margin-left:170px;
`;

const EditMyInfo: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    profileImage: "",
    part: "",
    cardinal: "",
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 마이페이지 조회 GET 요청
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await instance.get("/api/user/mypage/{user_id}");
        const { name, email, imageURL, part, cardinal } = response.data.response;

        setUserProfile({
          name,
          email,
          profileImage: imageURL,
          part,
          cardinal: `${cardinal}기`,
        });
        setError(null);
      } catch (error) {
        setError("유저 정보를 불러오는데 실패했습니다.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // 마이페이지 사진 업로드 api
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await instance.post("/api/user/imageAdd/{user_id}", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.imageUrl;
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      throw new Error("이미지 업로드에 실패했습니다.");
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await uploadImage(file);
        setUserProfile((prev) => ({
          ...prev,
          profileImage: imageUrl,
        }));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteImage = () => {
    setUserProfile((prev) => ({ ...prev, profileImage: "" }));
  };
  
//마이페이지 세부정보 수정 api
  const handleSaveProfile = async () => {
    try {
      const response = await instance.patch("/api/user/{user_id}", {
        image: userProfile.profileImage,
        cardinal: Number(userProfile.cardinal.replace("기", "")),
        part: userProfile.part,
      });

      if (response.status === 200) {
        console.log("내 정보 업데이트에 성공했습니다:", response.data);
      }
    } catch (error) {
      console.error("내 정보 업데이트에 실패했습니다:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserProfile((prev) => ({ ...prev, name: value }));
  };

  const handleEmailChange = (newEmail: string) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      email: newEmail,
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };
  if (loading) {
    return (
      <EmptyStateContainer>
        <CustomText textStyle="b2">로딩 중</CustomText>
      </EmptyStateContainer>
    );
  }

  if (error) {
    return (
      <EmptyStateContainer>
        <CustomText textStyle="b2" color="#FF6D57">
          {error}
        </CustomText>
      </EmptyStateContainer>
    );
  }


  return (
    <MyPageContainer>
      <div className="imageContainer">
        <CircledImage image={userProfile.profileImage || null} />
      </div>
      <div className="buttonContainer">
        <CustomButton
          width={115}
          height={54}
          borderColor="#778FB9"
          bgColor="#9FBEF7"
          textColor="#FFF"
          radius={30}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          사진 변경
        </CustomButton>
        <CustomButton
          width={115}
          height={54}
          borderColor="#E5E5E5"
          bgColor="#F7F7F7"
          textColor="#000"
          radius={30}
          onClick={handleDeleteImage}
        >
          사진 삭제
        </CustomButton>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <InputContainer>
        <div className="Inputgap">
          <CustomText textStyle="b3">이름</CustomText>
          <CustomInput
            placeholder={userProfile.name}
            value={userProfile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="Inputgap">
          <EmailInput
            inputPlaceholder={userProfile.email}
            inputValue={userProfile.email}
            onInputChange={handleEmailChange}
          />
        </div>
        <div className="Inputgap">
          <DropdownButton
            label="기수 선택"
            options={[
              { label: "2기", value: "2기" },
              { label: "3기", value: "3기" },
            ]}
            value={[userProfile.cardinal]}
            onChange={(selected) => handleDropdownChange("cardinal", selected[0])}
          />
        </div>
        <div className="Inputgap">
          <DropdownButton
            label="파트 선택"
            options={[
              { label: "PM", value: "PM" },
              { label: "PD", value: "PD" },
              { label: "FE", value: "FE" },
              { label: "BE", value: "BE" },
            ]}
            value={[userProfile.part]}
            onChange={(selected) => handleDropdownChange("part", selected[0])}
          />
        </div>
        <div className="editbutton">
          <CustomButton
            borderColor="#8FABDE"
            bgColor="#9FBEF7"
            textColor="#000"
            radius={20}
            onClick={handleSaveProfile}
          >
            정보 수정하기
          </CustomButton>
        </div>
      </InputContainer>
    </MyPageContainer>
  );
};

export default EditMyInfo;
