import React from "react";
import styled from "styled-components";

export const Btn = styled.button`
  padding: 1rem 0;
  width: 9.5rem;
  color: #fefefe;
  text-align: center;
  font: 300 1.1em sans-serif;
  text-transform: uppercase;
  border: none;
  background: #f8ca11;
  transition: .4s;
  cursor: pointer;

  &:hover { background: #000; }
`;

export default function Button({ children }) {
  return <a href="#"><Btn>{children}</Btn></a>
}