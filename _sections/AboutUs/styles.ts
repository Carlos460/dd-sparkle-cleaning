import styled from 'styled-components';

// SectionContainer
// Header
// InnerContainer
// Image
// Content
// Text
// Buttons

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: end;
  height: 20%;

  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 70px;
  font-weight: 600;
`;

export const InnerContainer = styled.div`
  height: 80%;
  display: flex;
`;

export const Image = styled.div`
  width: 50%;
  height: 100%;

  background-image: url('/images/clean_glass.webp');
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Text = styled.text`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding: 0px 15px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
`;

export const Button = styled.button`
  height: 45px;
  width: 130px;
  margin: 20px 15px 0px;
  font-size: 17px;

  color: var(--primary);
  background-color: white;
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  box-shadow: var(--primary);
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  &:active {
    background-color: var(--primary);
    color: white;
  }
`;
