import styled from "styled-components";

export const Container = styled.section`
  background: #161c1e;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  width: 80%;
  height: calc(100vh - 4.2rem);
`;

export const Title = styled.h2`
  margin: 1rem 0 5rem;
  color: #fff;
  text-align: center;
  font: 700 3em sans-serif;
  
  span { color: #f8ca12; }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 72%;
`;

export const Card = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
  width: 31.5%;
  border-radius: 5px;
  background: #fff;

  &:before {
    content: '${props => props.cardId}';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2.2rem;
    width: 4.5rem;
    height: 4.5rem;
    color: #fff;
    font: 300 1.5em sans-serif;
    border-radius: 50%;
    background: #f8ca12;
  }

  &:hover img {
    width: 88%;
    filter: drop-shadow(0 5px 10px #333);
  }
`;

export const Info = styled.figcaption`
  text-align: center;
`;

export const Car = styled.img`
  width: 85%;
  transition: .5s;
  cursor: pointer;
`;

export const Text = styled.h3`
  margin-bottom: 2rem;
  text-transform: uppercase;
  font: 300 1.4em sans-serif;
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  width: 70%;
  color: #1a1a1a;
  font: 300 1.15em sans-serif;
`;