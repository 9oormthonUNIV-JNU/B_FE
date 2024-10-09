import { useState, useEffect } from "react";
import CustomInput from "../../common/atoms/CustomInput";
import CustomButton from "../../common/atoms/CustomButton";
import styled from "styled-components";
import { instance } from "../../../apis/instance";  // instance import

const EmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: end;
`;

type EmailInputProps = {
  inputPlaceholder?: string;
  inputValue?: string;
  onInputChange?: (value: string) => void;
};

const EmailInput: React.FC<EmailInputProps> = ({
  inputPlaceholder,
  inputValue,
  onInputChange,
}) => {
  const [email, setEmail] = useState(inputValue || "");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAuthSent, setIsAuthSent] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
    setIsEmailValid(emailPattern.test(newValue));

    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  // 이메일 인증코드 (재발송) 요청 api
  const handleAuthClick = async () => {
    if (isEmailValid) {
      try {
        const response = await instance.post("/api/auth/send-code", {
          email: email,
        });
        
        if (response.status === 200) {
          setIsAuthSent(true);
          setShowNewInput(true);
          console.log("인증 코드가 발송되었습니다.");
        } else {
          console.log("인증 코드 발송 실패:", response.statusText);
        }
      } catch (error) {
        console.error("인증 코드 발송 중 오류 발생:", error);
      }
    } else {
      console.log("유효하지 않은 이메일입니다.");
    }
  };

  useEffect(() => {
    setEmail(inputValue || "");
  }, [inputValue]);

  return (
    <EmailContainer>
      <CustomInput
        label="이메일"
        placeholder={inputPlaceholder || "abcd123@gmail.com"}
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      {!isEmailValid && email.length > 0 && (
        <div style={{ color: "red", fontSize: "12px", marginTop: "8px" }}>
          유효한 이메일 주소를 입력하세요.
        </div>
      )}
      <div>
        <CustomButton
          textStyle="b3"
          textColor="white"
          width={100}
          height={64}
          onClick={handleAuthClick}
        >
          {isAuthSent ? "메일 재발송" : "인증하기"}
        </CustomButton>
      </div>
      {showNewInput && <CustomInput placeholder="인증 코드를 입력하세요" />}
    </EmailContainer>
  );
};

export default EmailInput;
