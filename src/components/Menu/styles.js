import styled from "styled-components";

export const Container = styled.div`
  background: #1a1a1a;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 4.2rem;
  color: #fff;
`;

export const Logo = styled.img``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
`;

export const Link = styled.a`
  text-decoration: none;
  font: 500 1.1em sans-serif;
  color: #fff;
  transition: .5s;

  &:hover { color: #f8ca11; }
`;