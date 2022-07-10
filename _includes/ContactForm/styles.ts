import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  max-width: 900px;
  margin: 150px auto auto;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 950px) {
    width: 100%;
    margin: 75px 0px 0px;
    padding: 10px;
  }
  @media (max-width: 450px) {
    padding: 0px;
    margin: 50px 0px 25px;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    padding: 0px 10px 15px;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 370px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0px 0px 5px;
  color: var(--primary);
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 5px;
  border: 1.4px solid var(--primary);
  outline: none;
  margin: 10px 0px;
  padding: 0px 0px 0px 5px;
  &::placeholder {
    color: var(--primary);
  }
`;

export const InputBox = styled.textarea`
  height: 150px;
  max-height: 250px;
  border-radius: 5px;
  border: 1.4px solid var(--primary);
  outline: none;
  margin: 10px 0px;
  padding: 5px;
  &::placeholder {
    color: var(--primary);
  }
`;

export const SubmitButton = styled.button`
  height: 35px;
  color: white;
  background-color: var(--primary);
  border-radius: 5px;
  border: 1.4px solid var(--primary);
  outline: none;
  margin: 10px 0px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: var(--primary);
  }
  &:active {
    background-color: var(--primary);
    color: white;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 100%;
  @media (max-width: 1100px) {
    width: fit-content;
  }
`;

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0px auto;
  background-image: url('static/vectors/profile.svg');
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    margin: 0px;
    border-radius: 100px;
  }
  @media (max-width: 720px) {
    width: 150px;
    height: 150px;
    transform: scale(0.75);
  }
`;

export const SocialLinkWrapper = styled.div`
  margin: 35px auto 5px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    margin: auto 35px;
  }
  @media (max-width: 900px) {
    margin: auto 10px;
  }
  @media (max-width: 450px) {
    margin: auto 0px;
  }
`;

export const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IIconProps {
  urlLink: string;
}

export const Icon = styled.div<IIconProps>`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  background-image: url(${(props) => props.urlLink});
  background-image: center;
`;

export const Text = styled.p`
  margin: 0px;
  font-size: 18px;
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
