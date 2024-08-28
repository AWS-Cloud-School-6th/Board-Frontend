import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { Login } from "./component/Login";
import { Board } from "./component/Board";
import { Register } from "./component/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/board/:page" element={<Board />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
