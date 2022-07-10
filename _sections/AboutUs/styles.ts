import styled from 'styled-components';

// SectionContainer
// Header
// InnerContainer
// Image
// Content
// Text
// Buttons

export const SectionContainer = styled.div`
  margin: 50px 0px;
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled.h1`
  font-family: sans-serif;
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 10px;
  width: 600px;
  margin: 0px auto;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 600px;
  height: 400px;
  margin: 0px auto;

  background-image: url('/static/images/cleaning.jpg');
  background-size: cover;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px 0px;
  margin: 0px auto;
  @media (max-width: 1300px) {
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 29px;
`;

export const ButtonList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export const ButtonItem = styled.a`
  width: 45%;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 100%;
  margin: 20px 0px 0px;
  font-size: 17px;

  text-align: center;
  color: var(--primary);
  background-color: white;
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.4s, color 0.4s;
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  &:active {
    background-color: white;
    color: var(--primary);
  }
  @media (max-width: 1300px) {
    width: 100%;
    margin: 10px 0px 0px;
  }
`;
