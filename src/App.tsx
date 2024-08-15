import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Register } from "./component/Register";
import { Login } from "./component/login";
import { Board } from "./component/Board";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="board" element={<Board />}></Route>
      </Routes>
    </>
  );
}

export default App;
