import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 환경 변수에서 API URL을 가져옵니다.
const signupUrl = `${process.env.REACT_APP_API_URL}/signup`;

// Signup 컴포넌트
export function Register() {
  // 입력 필드를 위한 상태 변수들
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // useNavigate 훅을 사용하여 페이지를 이동합니다.
  const navigate = useNavigate();

  // 회원가입 요청을 처리하는 함수
  const handleSignup = () => {
    // 요청 본문 데이터
    const user = {
      username,
      email,
      password1,
      password2,
    };

    // 서버로 POST 요청을 보냅니다.
    axios
      .post(signupUrl, user, { withCredentials: true })
      .then((res) => {
        console.log("회원가입 성공");
        // 성공 시 페이지를 이동합니다.
        navigate("/login");
      })
      .catch((err) => {
        console.error("회원가입 실패", err);
      });
  };

  return (
    <>
      <h2>회원가입</h2>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password
        <input
          type="password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm Password
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSignup}>회원가입</button>
    </>
  );
}
