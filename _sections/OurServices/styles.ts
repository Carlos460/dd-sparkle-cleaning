import styled from 'styled-components';

//SectionContainer
//Header
//Text
//BoxContainer
//LinkContainer
//Box
//Row

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 75%;
  margin: 275px auto 50px;
  @media (max-width: 800px) {
    max-width: 100%;
    margin: 160px 0px 50px;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 70px;
  line-height: 80px;
  font-weight: 600;
  font-family: sans-serif;
  color: ${(props) => props.color || 'black'};

  @media (max-width: 450px) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export const Text = styled.div`
  margin: 30px 0px;
  font-size: 24px;
  font-family: sans-serif;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  width: 100%;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: auto auto auto;

  justify-content: space-between;
  row-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  background-color: var(--primary);
  color: white;
  font-size: 17px;
  line-height: 20px;
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  height: 60px;
  width: 150px;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

  @media (max-width: 1000px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 30px;
  color: white;
  text-decoration: none;
  font-size: 20px;

  @media (max-width: 450px) {
    justify-content: center;
    margin-top: 40px;
  }
`;

export const RequestLink = styled.div`
  color: var(--primary);
  text-decoration: none;
  line-height: 25px;

  display: flex;
  align-items: center;

  & > p {
    margin: 0px;
    transition: text-decoration 0.2s;
  }

  & > p:hover {
    text-decoration: underline;
  }

  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const Arrow = styled.div`
  background-image: url('/static/icons/Arrow.svg');
  background-size: cover;
  height: 20px;
  width: 25px;
  margin-left: 5px;

  @media (max-width: 450px) {
    width: 20px;
    height: 15px;
  }
`;
