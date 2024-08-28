import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
  ButtonGroup,
  Button,
  Input,
} from "@chakra-ui/react";
import { User } from "../model/User";

export function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUrl = `${process.env.REACT_APP_API_URL}/login`;

  const user: User = {
    username: id,
    password: password,
  };

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
      .then(() => {
        console.log("로그인 성공");
        navigate("/board");
      })
      .catch((err) => {
        console.error("로그인 실패:", err);
      });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      bg="#1A202C"
    >
      <Card maxW="sm" bg="#232F3E" color="white">
        <CardBody>
          <Heading size="md" mb="4">
            AWS CLOUD SCHOOL 6기
          </Heading>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            mb="6"
          />
          <Stack spacing="3">
            <Text color="white" fontSize="2xl">
              ID
            </Text>
            <Input
              value={id}
              onChange={(e) => setId(e.target.value)}
              bg="white"
              color="black"
            />
            <Text color="white" fontSize="2xl">
              Password
            </Text>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              bg="white"
              color="black"
            />
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup w="100%" spacing="4">
            <Button
              variant="ghost"
              color="white"
              w="full"
              _hover={{
                color: "#FF9900",
              }}
            >
              로그인
            </Button>
            <Button
              color="black"
              fontWeight="bold"
              borderRadius="md"
              bg="#FFA500"
              w="full"
              _hover={{
                bg: "#FF8C00",
              }}
              onClick={() => login(user)}
            >
              회원가입
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}
