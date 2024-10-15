import CustomInput from "../atoms/CustomInput";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomButton from "../atoms/CustomButton";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../apis/instance";
import { useState, useRef } from "react";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .login {
    display: flex;
    justify-content: center;
    margin-bottom: 75px;
  }

  .login_input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  .login_error {
    display: flex;
  }

  .login_button {
    display: flex;
    margin-top: 20px;
    margin-bottom: 22px;
  }

  .login_signup {
    display: flex;
    justify-content: center;
  }
`;

const LoginForm = () => {
  const nav = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string | null>();

  const handleLogin = async () => {
    if (!email) {
      setError("아이디와 비밀번호를 입력해주세요.");
      emailRef.current?.focus(); // 이메일 입력 필드에 포커스
      return;
    }
    if (!password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      passwordRef.current?.focus(); // 비밀번호 입력 필드에 포커스
      return;
    }

    try {
      const response = await instance.post("/api/user/login", {
        email,
        password,
      });

      if (response.data.success) {
        const token = response.headers.authorization;
        localStorage.setItem("auth", token);

        const { role, image, approved } = response.data.response;
        localStorage.setItem("role", role);
        localStorage.setItem("image", image);

        if (approved) nav("/");
        else nav("/pending");
      } else {
        setError("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      setError("아이디 또는 비밀번호가 틀렸습니다.");
      console.error(error);
    }
  };

  return (
    <LoginFormContainer>
      <div className="login">
        <CustomText textStyle="h2">LOGIN</CustomText>
      </div>
      <div className="login_input">
        <CustomInput
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef} // 이메일 입력 필드를 ref로 참조
        />
        <CustomInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef} // 비밀번호 입력 필드를 ref로 참조
        />
      </div>
      {error && (
        <div className="login_error">
          <CustomText textStyle="nav" color="#FF6D57">
            {error}
          </CustomText>
        </div>
      )}
      <div className="login_button">
        <CustomButton textStyle="b3" textColor="#5E5E5E" onClick={handleLogin}>
          LOGIN
        </CustomButton>
      </div>
      <div className="login_signup">
        <CustomText
          color=" #797979"
          textStyle="nav"
          onClick={() => nav("/signup")}
        >
          회원가입
        </CustomText>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;