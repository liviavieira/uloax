import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1a1a1a;
  z-index: 1;
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
  transition: .6s;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    margin: 0;
    padding: 5rem 10rem;
    width: 100%;
    height: 100vh;
    border-right: 2rem solid ${props => props.isMobile ? '#373737' : 'transparent'};
    border-radius: ${props => props.isMobile ? '0' : '5px'};
    transform: ${props => props.isMobile ? '' : 'translateX(100%)'};
    background: ${props => props.isMobile && '#f8ca12'};
  }
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

  @media (max-width: 768px) {
    &:before {
      left: 0;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }
`;

export const MobileNav = styled.button`
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  &:before,
  &:after {
    position: relative;
    content: '';
    width: 1.8rem;
    height: 4px;
    background: #fff;
    transition: .5s;
  }
  
  &:before {
    top: ${props => props.isMobile ? '6px' : '0'};
    transform: ${props => props.isMobile ? 'rotate(-45deg)' : ''};
  }
  &:after {
    top: ${props => props.isMobile ? '-6px' : '0'};
    transform: ${props => props.isMobile ? 'rotate(45deg)' : ''};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;