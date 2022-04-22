import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  /* border: 1px solid black; */
  color: ${(props) => {
    return props.color;
  }};
  background-color: ${(props) => {
    return props.backgroud;
  }};
  border-color: black;
  border-style: ${(props) => {
    return props.border;
  }};
  margin: 10px;
`;
