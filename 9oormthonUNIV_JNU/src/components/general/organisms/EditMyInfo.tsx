import React, { useState } from 'react';
import styled from 'styled-components';
import CustomText from '../../common/atoms/CustomText';
import CircledImage from '../atoms/CircledImage';
import DropdownButton from '../../common/atoms/DropdownButton';
import CustomInput from '../../common/atoms/CustomInput';
import CustomButton from '../../common/atoms/CustomButton';
import EmailInput from '../molecules/EmailInput';

type UserProfile = {
    name: string;
    email: string;
    profileImage?: string;
    part: string;
    generation: string;
};

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto;

  .imageContainer {
  width:180px;
  height:180px;
    margin-bottom: 30px;
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

const EditMyInfo: React.FC = () => {
    //현재 유저 정보
    const [userProfile, setUserProfile] = useState<UserProfile>({
        name: '김구름',
        email: 'abcd123@email.com',
        profileImage: '', 
        part: '',
        generation: '',
    });

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

    const handleSaveProfile = () => {
        console.log('Saved Profile:', userProfile);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProfile((prev) => ({ ...prev, profileImage: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteImage = () => {
        setUserProfile((prev) => ({ ...prev, profileImage: '' }));
    };

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
                    onClick={() => document.getElementById('fileInput')?.click()}
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
                    style={{ display: 'none' }}
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
                        options={['2기', '3기']}
                        value={userProfile.generation}
                        onChange={(selected) => handleDropdownChange('batch', selected[0])}
                    />
                </div>
                <div className="Inputgap">
                    <DropdownButton
                        label="파트 선택"
                        options={['PM', 'PD', 'FE', 'BE']}
                        value={userProfile.part}
                        onChange={(selected) => handleDropdownChange('part', selected[0])}
                    />
                </div>
                <div className="editbutton">
                    <CustomButton borderColor="#8FABDE" bgColor="#9FBEF7" textColor="#000" radius={20} onClick={handleSaveProfile}>
                        정보 수정하기
                    </CustomButton>
                </div>
            </InputContainer>
        </MyPageContainer>
    );
};

export default EditMyInfo;
