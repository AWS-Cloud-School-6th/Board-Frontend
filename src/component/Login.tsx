import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginUrl = `${process.env.REACT_APP_API_URL}/login`;

export function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const user: User = {
    username: id,
    password: password,
  };
  const navigate = useNavigate();

  const login = (user: User) => {
    axios
      .post(
        loginUrl,
        {
          username: user.username,
          password: user.password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("성공");
        navigate("/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      id
      <input
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      password
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={() => login(user)}>로그인</button>
    </>
  );
}
interface User {
  username: string;
  password: string;
}
