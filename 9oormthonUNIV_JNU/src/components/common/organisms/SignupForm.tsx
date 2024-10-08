import CustomText from "../atoms/CustomText";
import CustomInput from "../atoms/CustomInput";
import EmailVerification from "../molecules/EmailVerification";
import styled from "styled-components";
import DropdownButton from "../atoms/DropdownButton";
import CustomButton from "../atoms/CustomButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { instance } from "../../../apis/instance";

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .signup {
    display: flex;
    margin-bottom: 30px;
    justify-content: center;
  }

  .signup_email {
    display: flex;
    flex-direction: column;
    width: 100%;

    .signup_email_input {
      display: flex;
      gap: 10px;
      align-items: flex-end;
      width: 100%;
    }
  }

  .signup_password {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    .signup_password_info {
      display: flex;
      margin-left: 10px;
    }
  }

  .signup_select {
    width: 100%;
  }

  .signup_button {
    margin: 20px 0px 60px;
    width: 100%;
  }

  .signup_error {
    color: #ff6d57;
    margin-left: 10px;
    margin-top: 10px;
  }
`;

const Notification = styled.div`
  display: flex;
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 20px;
`;

const SignupForm = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [isAuthSent, setIsAuthSent] = useState(false);
  const [showNewInput, setShowNewInput] = useState(false);
  const [authCode, setAuthCode] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [cardinal, setCardinal] = useState<string>(""); // 기수를 string으로 변경
  const [part, setPart] = useState<string>("");
  const [inputErrors, setInputErrors] = useState({
    email: "",
    name: "",
    password: "",
    authCode: "",
    cardinal: "",
    part: "",
  });

  const handleAuthClick = async () => {
    if (!email) {
      setInputErrors((prev) => ({ ...prev, email: "이메일을 입력해주세요." }));
      return;
    }

    try {
      const response = await instance.post("/api/user/authentication", {
        email,
      });

      if (response.data.status === "success") {
        setIsAuthSent(true);
        setShowNewInput(true);
        setInputErrors((prev) => ({ ...prev, email: "" })); // 이메일 오류 메시지 제거
      }
    } catch {
      setInputErrors((prev) => ({
        ...prev,
        email: "인증 요청 중 오류가 발생했습니다.",
      }));
    }
  };

  const handleSignup = async () => {
    const errors = {
      email: "",
      name: "",
      password: "",
      authCode: "",
      cardinal: "",
      part: "",
    };

    if (!name) errors.name = "이름을 입력해주세요.";
    if (!email) errors.email = "이메일을 입력해주세요.";
    if (!authCode) errors.authCode = "인증코드를 입력해주세요.";
    if (!password) errors.password = "비밀번호를 입력해주세요.";
    else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,15}$/.test(password)
    ) {
      errors.password = "비밀번호가 조건에 맞지 않습니다.";
    }
    if (!cardinal) errors.cardinal = "기수를 선택해주세요.";
    if (!part) errors.part = "파트를 선택해주세요.";

    setInputErrors(errors);

    // 하나라도 오류가 있으면 중단
    if (Object.values(errors).some((err) => err !== "")) return;

    try {
      const response = await instance.post("/api/user/signup", {
        email,
        password,
        name,
        cardinal,
        part,
      });

      if (response.data.success) {
        nav("/pending");
      } else {
        setInputErrors((prev) => ({
          ...prev,
          general: "회원가입 요청 중 오류가 발생했습니다.",
        }));
      }
    } catch {
      setInputErrors((prev) => ({
        ...prev,
        general: "회원가입 요청 중 오류가 발생했습니다.",
      }));
    }
  };

  return (
    <SignupFormContainer>
      <div className="signup">
        <CustomText textStyle="h1">SIGN UP</CustomText>
      </div>
      <Notification>
        <CustomText textStyle="b3" line={30}>
          회원가입 대상자는 구름톤 유니브 전남대 회원입니다. 그 외 사용자가
          회원가입 할 경우 회원가입 승인 처리가 되지 않습니다.
        </CustomText>
      </Notification>

      <div className="signup_name">
        <CustomInput
          label="이름"
          placeholder="김구름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {inputErrors.name && (
          <div className="signup_error">
            <CustomText textStyle="nav" color="#FF6D57">
              {inputErrors.name}
            </CustomText>
          </div>
        )}
      </div>

      <div className="sigup_email">
        <EmailVerification
          email={email}
          setEmail={setEmail}
          handleAuthClick={handleAuthClick}
          isAuthSent={isAuthSent}
          showNewInput={showNewInput}
        />

        {/* 이메일 인증 코드 필드가 표시되지 않을 때만 이메일 오류 메시지 표시 */}
        {!showNewInput && inputErrors.email && (
          <div className="signup_error">
            <CustomText textStyle="nav" color="#FF6D57">
              {inputErrors.email}
            </CustomText>
          </div>
        )}

        {/* 이메일 인증 코드 필드가 표시될 때만 인증 코드 입력 필드와 오류 메시지 표시 */}
        {showNewInput && (
          <>
            <CustomInput
              placeholder="인증 코드를 입력하세요"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
            />
            {inputErrors.authCode && (
              <div className="signup_error">
                <CustomText textStyle="nav" color="#FF6D57">
                  {inputErrors.authCode}
                </CustomText>
              </div>
            )}
          </>
        )}
      </div>

      <div className="signup_password">
        <CustomInput
          label="비밀번호"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signup_password_info">
          <CustomText textStyle="nav" color=" #484848">
            영문자/숫자/특수문자가 포함된 8~15자 조합으로 입력해주세요
          </CustomText>
        </div>
        {inputErrors.password && (
          <div className="signup_error">
            <CustomText textStyle="nav" color="#FF6D57">
              {inputErrors.password}
            </CustomText>
          </div>
        )}
      </div>

      <div className="signup_select">
        <DropdownButton
          label="기수 선택"
          options={[
            { label: "2기", value: "2" },
            { label: "3기", value: "3" },
          ]}
          onChange={(value: string[]) => setCardinal(value[0])}
        />
        {inputErrors.cardinal && (
          <div className="signup_error">
            <CustomText textStyle="nav" color="#FF6D57">
              {inputErrors.cardinal}
            </CustomText>
          </div>
        )}
      </div>

      <div className="signup_select">
        <DropdownButton
          label="파트 선택"
          options={[
            { label: "PM", value: "PM" },
            { label: "PD", value: "PD" },
            { label: "FE", value: "FE" },
            { label: "BE", value: "BE" },
          ]}
          onChange={(value: string[]) => setPart(value[0])}
        />
        {inputErrors.part && (
          <div className="signup_error">
            <CustomText textStyle="nav" color="#FF6D57">
              {inputErrors.part}
            </CustomText>
          </div>
        )}
      </div>

      <div className="signup_button">
        <CustomButton textStyle="b3" textColor="#2B2D36" onClick={handleSignup}>
          SIGN UP
        </CustomButton>
      </div>
    </SignupFormContainer>
  );
};

export default SignupForm;
