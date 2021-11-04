import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: flex-end;
  height: calc(100vh - 4.2rem);
  background: url(${props => props.bg});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7vw 3rem 1rem;
  width: 65%;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  height: 10rem;
  color: #24292b;
  font: 300 3em sans-serif;

  span {
    color: #fff;
    font-size: .95em;
  }
`;

export const Phone = styled.img``;