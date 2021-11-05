import styled from "styled-components";

export const LeftArrow = styled.button`
  position: absolute;
  top: 2.9rem;
  left: -5rem;
  width: 4.1rem;
  height: 4.1rem;
  border: none;
  border-radius: 50%;
  background: #f8ca12 !important;
  transition: .3s;
  cursor: pointer;
  z-index: 1;

  :active {
    background: #ccc !important;
  }

  &:before {
    content: '${props => props.arrow}';
    font: 600 1.5rem sans-serif;
    color: #000;
  }

  &:hover {
    box-shadow: 0 5px 5px #333;
    background: #fff !important;
  }
`;

export const RightArrow = styled(LeftArrow)`
  top: 7.8rem;

  &:before { content: '>'; }
`;