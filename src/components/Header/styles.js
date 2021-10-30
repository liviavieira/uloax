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
  color: #fff;
  text-align: center;
  background: #1a1a1a;
`;

export const Taxi = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43.5%;
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
`;

export const HireBox = styled.div`
  text-align: center;
  width: 54%;
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
`;

export const Paragraphyou = styled.p`
  margin-bottom: .6rem;
  color: #000;
  font: 300 1.85em sans-serif;
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
`;

export const Img = styled.img``;