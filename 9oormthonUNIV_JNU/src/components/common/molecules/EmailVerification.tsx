import { useState } from "react";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";

const EmailVerification = () => {
  const [isAuthSent, setIsAuthSent] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);

  const handleAuthClick = () => {
    setIsAuthSent(true);
    setShowNewInput(true);
  };

  return (
    <div className="signup_email">
      <div className="signup_email_input">
        <CustomInput
          label="이메일"
          placeholder="abcd123@gmail.com"
          type="email"
        />
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
      </div>
      {showNewInput && <CustomInput placeholder="인증 코드를 입력하세요" />}
    </div>
  );
};

export default EmailVerification;
