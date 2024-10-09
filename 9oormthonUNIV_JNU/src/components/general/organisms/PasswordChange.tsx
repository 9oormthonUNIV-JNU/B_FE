import React, { useState } from 'react';
import styled from 'styled-components';
import CustomText from '../../common/atoms/CustomText';
import CustomInput from '../../common/atoms/CustomInput';
import CustomButton from '../../common/atoms/CustomButton';
import { instance } from '../../../apis/instance';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 40px;
  padding: 0px 200px 0px 100px;

  .buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .inputContainer {
    gap: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: #FF6D57;
  font-size: 16px;
  margin: 5px 0 10px;
`;

const PasswordChange: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  
  // 비밀번호 유효성 검사
  const isPasswordValid = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);

    if (!isPasswordValid(value)) {
      setErrorMessage('영문자/숫자/특수문자가 포함된 8~15자 조합으로 입력해주세요');
    } else {
      setErrorMessage('');
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== newPassword) {
      setPasswordMatchError('새 비밀번호와 일치하지 않습니다.');
    } else {
      setPasswordMatchError('');
    }
  };

  //비밀번호 변경 요청 API
  const handleSubmit = async () => {
    if (!errorMessage && !passwordMatchError && newPassword && confirmPassword) {
      try {
        const response = await instance.post('api/user/password/{user_id}', {
          password: currentPassword,
          newpassword: newPassword,
        });

        if (response.status === 200) {
          console.log('비밀번호가 성공적으로 변경되었습니다.');
        }
      } catch (error) {
        console.log('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        console.error(error);
      }
    }
  };

  return (
    <Container>
      <div className='inputContainer'>
        <CustomText textStyle='b3'>기존 비밀번호</CustomText>
        <CustomInput
          placeholder="기존 비밀번호를 입력해주세요"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className='inputContainer'>
        <CustomText textStyle='b3'>새 비밀번호</CustomText>
        <CustomInput
          placeholder="새 비밀번호를 입력해주세요"
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div className='inputContainer'>
        <CustomText textStyle='b3'>새 비밀번호 확인</CustomText>
        <CustomInput
          placeholder="새 비밀번호 재 입력"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {passwordMatchError && <ErrorMessage>{passwordMatchError}</ErrorMessage>}
      </div>
      <div className='buttonContainer'>
        <CustomButton bgColor="#9FBEF7" borderColor="#8FABDE" onClick={handleSubmit}>비밀번호 변경</CustomButton>
        <CustomButton bgColor="#FFFFFF" borderColor="#9C9C9C" onClick={handleSubmit}>취소</CustomButton>
      </div>
    </Container>
  );
};

export default PasswordChange;
