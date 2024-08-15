import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./component/Login";
import { Board } from "./component/Board";
import { Register } from "./component/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
