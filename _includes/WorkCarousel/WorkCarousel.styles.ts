import styled from 'styled-components';

export const Conatiner = styled.div`
  position: relative;
  width: 680px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const WorkImage = styled.div`
  height: 500px;
  background-image: url('/photos/clean_glass.webp');
  background-size: center;
  background-position: 0px 700px;
  @media (max-width: 1000px) {
    height: 400px;
  }
`;

export const WhiteBlock = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;

  position: absolute;
  top: -50px;
  left: 50px;
  @media (max-width: 1115px) {
    display: none;
  }
`;
