import { useState } from "react";
import axios from "axios";

export function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const user: User = {
    username: id,
    password: password,
  };

  const login = (user: User) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/login`, {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        console.log("성공");
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
