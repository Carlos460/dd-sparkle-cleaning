import styled from 'styled-components';

export const Conatiner = styled.div`
  position: relative;
  width: 680px;
  margin-top: 100px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const WorkImage = styled.div`
  height: 500px;
  background-image: url('clean_glass.webp');
  background-size: cover;
  background-position: 0px -300px;
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
