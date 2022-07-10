import * as S from './styles';

const ContactForm = () => {
  return (
    <S.Container>
      <S.LeftContent>
        <S.Title> Get In Touch </S.Title>
        <S.Input placeholder="Name"></S.Input>
        <S.Input placeholder="Phone Number"></S.Input>
        <S.Input placeholder="Email"></S.Input>
        <S.InputBox placeholder="Wite a message..."></S.InputBox>
        <S.SubmitButton> Send Email</S.SubmitButton>
      </S.LeftContent>
      <S.RightContent>
        <S.ProfileImageWrapper>
          <S.ProfileImage />
        </S.ProfileImageWrapper>
        <S.SocialLinkWrapper>
          <S.SocialLink>
            <S.Icon urlLink="/static/icons/User.svg" />
            <S.Text>Dulce</S.Text>
          </S.SocialLink>
          <S.SocialLink>
            <S.Icon urlLink="/static/icons/Envelope.svg" />
            <S.Text>dlcdulce7@gmail.com</S.Text>
          </S.SocialLink>
          <S.SocialLink>
            <S.Icon urlLink="/static/icons/Phone.svg" />
            <S.Text>{`(347) 337-9903`}</S.Text>
          </S.SocialLink>
        </S.SocialLinkWrapper>
      </S.RightContent>
    </S.Container>
  );
};

export default ContactForm;
