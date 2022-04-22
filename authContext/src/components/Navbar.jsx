import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

const Button = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
`;
export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <nav>
      <Button
        onClick={() => {
          isAuth();
        }}
      >
        log In
      </Button>
      <Button>log Out</Button>
    </nav>
  );
};
