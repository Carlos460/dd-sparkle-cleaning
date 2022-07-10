import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 1000px;
  display: flex;
  @media (max-width: 800px) {
    min-height: 800px;
  }
`;

export const Container = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0px;
  text-align: center;
  font-size: 110px;
  font-weight: 700;
  font-family: sans-serif;
  @media (max-width: 800px) {
    font-size: 60px;
  }
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.div`
  height: 225px;
  width: 225px;
  border-radius: 150px;
  margin: 0px auto 20px;

  background-image: url('/static/images/profile.webp');
  background-size: cover;
`;

export const TestimonialText = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0px 0px;

  font-size: 25px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 25px auto;
`;

export const Button = styled.button`
  height: 45px;
  width: 130px;
  margin: 0px 15px;
  font-size: 17px;

  color: var(--primary);
  background-color: transparent;
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  &:active {
    background-color: transparent;
    color: var(--primary);
  }
`;
