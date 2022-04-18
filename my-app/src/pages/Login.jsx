import styled from "styled-components";
import {mobile} from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCalls";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:teal;
  opacity:1;
  color: black;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  background:rgba(0,0,0,0.3);
  padding: 20px;
  
  border-radius:10px;
  
  box-shadow: 5px 5px 5px 5px #000;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
 
  font-weight: bold;
  text-align:center

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
 
 
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #e0e0e0;
  &:hover {
    background-color: #bdbdbd;
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: teal;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background:teal;
    transform: scale(1.05);
  }
  &:disabled{
    color:green;
    curosr: not-allowed
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    // no refreshing page
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>E-Buy</Title>
        <Form>
        <Input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick} disabled={isFetching}>
        LOGIN
      </Button>
      
      {error && <Error>Something went wrong...</Error>}
      <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
      <Link>CREATE A NEW ACCOUNT</Link>
    </Form>
  </Wrapper>
</Container>
);
};

export default Login;