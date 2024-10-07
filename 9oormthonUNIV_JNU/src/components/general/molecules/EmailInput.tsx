import { useState, useEffect } from "react";
import CustomInput from "../../common/atoms/CustomInput";
import CustomButton from "../../common/atoms/CustomButton";
import styled from "styled-components";

const EmailContainer= styled.div`
display:flex;
flex-direction:row;
gap:10px;
align-items: end;
`

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


  const handleAuthClick = () => {
    if (isEmailValid) {
        setIsAuthSent(true);
    setShowNewInput(true);
      console.log("유효한 이메일입니다:", email);
      
 
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
        {/* 이메일 유효성 검사 실패 시 경고 메시지 */}
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
            
          > {isAuthSent ? "메일 재발송" : "인증하기"}
          </CustomButton>
        </div>
        {showNewInput && <CustomInput placeholder="인증 코드를 입력하세요" />}
    
      </EmailContainer>
  );
};

export default EmailInput;
