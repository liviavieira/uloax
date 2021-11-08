import styled from "styled-components";

export const Container = styled.header`
  margin: 4.2rem 0 12vh;
  background: #1a1a1a;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem 0 9rem;
  height: 78vh;
  min-height: 70vh;
  color: #fff;
  text-align: center;
  background: #1a1a1a;

  @media (max-width: 1200px) {
    padding-left: 1rem;
    height: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Taxi = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43.5%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Contact = styled.figcaption`
  display: flex;
  align-self: end;
  flex-direction: column;
  padding: 1rem 0 1.2rem;
  width: 88%;
  text-align: center;
  font: 300 2.4em sans-serif;
  background: #f8ca12;

  span {
    padding-top: 1.2rem;
    color: #1a1a1a;
  }

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 1.6rem;
  }
`;

export const HireBox = styled.div`
  text-align: center;
  width: 54%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Hire = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem 1.9rem;
  width: 100%;
  background-color: #ffffff;
`

export const Paragraphcity = styled.p`
  margin: 3px 0 2rem;
  color: #fff;
  font: 300 1.64em sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.2em;
  }
`;

export const Paragraphyou = styled.p`
  margin-bottom: .6rem;
  color: #000;
  font: 300 1.85em sans-serif;

  @media (max-width: 1200px) {
    font-size: 1.5em;
  }
`;

export const Takeinput = styled.input`
  display: flex;
  margin-bottom: 1rem;
  padding: .8rem 1.2rem .6rem;
  width: 100%;
  font: 300 1.1em sans-serif;
  border: none;
  border-radius: 0.3rem;
  background: #e1e1e1;

  &::placeholder { color: #1a1a1a; }

  @media (max-width: 768px) {
    align-self: center;
    max-width: 480px;
  }
`;

export const Search = styled.button`
  align-self: end;
  width: 10rem;
  padding: 1.1rem 0;
  color: #fff;
  font: 300 1.05em sans-serif;
  border: none;
  border-radius: 10px;
  background: #353433;
  transition: .2s;
  cursor: pointer;

  &:hover { background: #444;}

  @media (max-width: 1200px) {
    width: 13rem;
  }
`;

export const Img = styled.img``;