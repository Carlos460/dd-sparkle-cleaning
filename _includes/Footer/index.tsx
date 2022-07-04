import * as S from './Footer.styles';
import Link from 'next/link';


const Footer = () => {
  return (
    <S.SectionContainer>
      <S.Left>
        <S.Title>D.D.Sparkle Cleaning</S.Title>
            <S.FooterContainer>
                <S.FooterLink>
                  <a href="/about"> About </a>
                </S.FooterLink>
                
                <S.FooterLink>
                  <a href="/contact"> Contact </a>
                </S.FooterLink>

                <S.FooterLink>
                  <a href="/services"> Services </a>
                </S.FooterLink>

            </S.FooterContainer>
      </S.Left>
      
      <S.Right>
        <S.Title>Dulce Contact Info</S.Title>
        <div>(347) 337-9903</div>
        <div>dlcdulce7@gmail.com</div>
        <div>New York City, New York</div>
      </S.Right>
    </S.SectionContainer>
  );
};

export default Footer;



