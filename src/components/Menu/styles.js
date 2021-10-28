import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 79%;
  height: 4.2rem;
  color: #fff;
`;

export const Logo = styled.img``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3.5rem;
  padding-top: .8rem;
  width: 42%;
`;

export const Link = styled.a`
  text-decoration: none;
  font: 500 1.1em sans-serif;
  color: #fff;
  transition: .5s;
  letter-spacing: .5px;

  &:before {
    content: '';
    position: relative;
    left: 40%; bottom: -1.5rem;
    display: block;
    width: 0;
    height: 1px;
    background: #fff;
    transition: .5s;
  }

  &:hover {
    color: #f8ca11;

    &:before {
      left: 20%;
      width: 60%;
      background: #f8ca11;
    }
  }
`;