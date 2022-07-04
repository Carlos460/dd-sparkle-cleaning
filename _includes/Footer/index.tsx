import * as S from './Footer.styles';
import Link from 'next/link';


const Footer = () => {
  return (
    <S.SectionContainer>
      <S.Left>
        <ul>
          <li>
            <Link href={"/"}>
              <a> 
                <S.Title>D.D. Sparkle Cleaning </S.Title>  
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/about"}>
              <a> About </a>
            </Link>
          </li>

          <li>
            <Link href={"/services"}>
              <a> Services </a>
            </Link>
          </li>

          <li>
            <Link href={"/contact"}>
              <a> Contact </a>
            </Link>
          </li>
        </ul>
           
      </S.Left>
      
      <S.Right>
        <S.Title>Dulce Contact Info</S.Title>
        <div>(347)-337-9903</div>
        <div>dlcdulce7@gmail.com</div>
        <div>New York City, New York</div>
      </S.Right>
    </S.SectionContainer>
  );
};

export default Footer;



