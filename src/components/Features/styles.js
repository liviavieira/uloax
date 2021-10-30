import styled from "styled-components";

export const Container = styled.section``;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 5.1rem 0;
  width: 82%;
  color: #1a1a1a;
`;

export const Title = styled.h2`
  margin: 1rem 0 6.5rem;
  text-align: center;
  font: 300 3em sans-serif;

  span { color: #f4db31; }

  &:after {
    content: '';
    position: relative;
    bottom: -.8rem;
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 1px;
    background: #1a1a1a;
  }
`;

export const Row = styled.figure`
  display: flex;
  flex-direction: ${props => props.isOdd && 'row-reverse'};
`;

export const Img = styled.img``;

export const RowInfo = styled.figcaption`
  display: flex;
  align-items: ${props => props.isOdd && 'end'};
  text-align: ${props => props.isOdd && 'end'};
  flex-direction: column;
  justify-content: space-between;
  padding: ${props => props.isOdd ? '1.5rem 2.5rem 1.5rem 0' : '1.5rem 0 1.5rem 2.5rem'};
`;

export const Text = styled.h3`
  font: 300 1.4em sans-serif;
`;

export const About = styled.p`
  line-height: 1.6 !important;
  font: 300 .95em sans-serif;
`;