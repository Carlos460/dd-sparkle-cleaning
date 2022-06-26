import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 150px auto auto;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;

export const LeftContent = styled.div`
  width: 50%;
  padding: 0px 25px;
  display: flex;
  flex-direction: column;
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0px 0px 5px;
  color: var(--primary);
`;

export const Input = styled.input`
  height: 30px;
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
  height: 30px;
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
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0px auto;
  background-image: url('/vector-profile.svg');
  background-position: center;
  background-repeat: no-repeat;
`;

export const SocialLinkWrapper = styled.div`
  margin: 35px auto 5px;
  display: flex;
  flex-direction: column;
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
`;
