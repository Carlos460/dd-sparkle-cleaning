import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 25px 0px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 50px auto;
  display: flex;
  @media (max-width: 1000px) {
    width: 100%;
    margin: 0px;
    flex-direction: column;
  }
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  max-width: 300px;
  margin: auto 0px;
  padding: 0px 0px 0px 15px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 10px auto;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin: 0px;

  color: white;
  font-family: sans-serif;
  font-size: 125px;
  font-weight: 700;
  @media (max-width: 800px) {
    font-size: 70px;
    text-align: center;
  }
`;

export const Text = styled.h2`
  color: white;
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const OutlinedButton = styled.button`
  height: 45px;
  width: 130px;
  font-size: 17px;

  color: white;
  background-color: transparent;
  border: solid 2px white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: white;
    color: var(--primary);
  }
  &:active {
    background-color: transparent;
    color: white;
  }
  @media (max-width: 1000px) {
    margin: 0px auto;
  }
`;
