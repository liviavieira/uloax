import styled from "styled-components";

export const LeftArrow = styled.button`
  position: absolute;
  top: 40%;
  left: -5rem;
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 50%;
  background: #f8ca12;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: '${props => props.arrow}';
    font: 600 1.5rem sans-serif;
    color: #000;
  }
`;

export const RightArrow = styled(LeftArrow)`
  top: 68%;

  &:before { content: '>'; }
`;