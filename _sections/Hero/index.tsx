import Link from 'next/link';

import * as Sparkle from '@styles/Sparkle.styles';
import * as S from './styles';

const Hero = () => {
  return (
    <S.Wrapper>
      <Sparkle.Title>
        Reliable <span style={{ color: '#FF91AF' }}>Cleaning</span> Services
      </Sparkle.Title>
      <Sparkle.SubTitle>
        Full of experience and good references cleaning apartments, homes, and
        offices!
      </Sparkle.SubTitle>
      <S.ButtonWrapper>
        <Link href={`/contact`}>
          <a>
            <S.CtaButton>Schedule Appointment</S.CtaButton>
          </a>
        </Link>
        <Link href={`/services`}>
          <a>
            <S.CtaButton>Our Services</S.CtaButton>
          </a>
        </Link>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default Hero;
