import styled from "styled-components";

//Wrapper
//FooterLink
//Section Container
//Footer Container
//Left
//Right
//Title

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary);
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 32px 0px;

  color: white;
  font-family: sans-serif;
  font-size: 20px;

  & > a {
    text-decoration: none;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  text-decoration: none;

  & > ul > li > a {
    font-family: sans-serif;
    text-decoration: none;
    color: white;
  }

  & > ul > li > a:hover {
    opacity: 0.75;
    text-decoration: underline;
  }

  & > ul {
    list-style: none;
  }

  @media (max-width: 700px) {
    align-items: center;
    width: 100%;
    & > ul > li {
      display: flex;
      justify-content: center;
      font-size: 15px;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: end;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const FooterText = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media (max-width: 700px) {
    justify-content: center;
    font-size: 15px;
  }
`;

export const Title = styled.div`
  font-family: sans-serif;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;
