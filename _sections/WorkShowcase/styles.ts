import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 25px 0px;
    min-height: 800px;
  }
`;

export const Container = styled.div`
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
  @media (max-width: 350px) {
    font-size: 50px;
    line-height: 50px;
    margin: 0px auto 10px;
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
