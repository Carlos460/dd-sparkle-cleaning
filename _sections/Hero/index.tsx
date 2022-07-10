import Link from 'next/link';

import * as Sparkle from '@styles/Sparkle.styles';
import * as S from './styles';

const Hero = () => {
  return (
    <S.Wrapper>
      <Sparkle.Title>
        Reliable <span style={{ color: '#FF91AF' }}>Cleaning</span> Service
      </Sparkle.Title>
      <Sparkle.SubTitle>
        Full of experience and good references, cleaning apartments, homes, and
        offices!
      </Sparkle.SubTitle>
      <Link href={`/contact`}>
        <a>
          <S.CtaButton>Schedule Appointment</S.CtaButton>
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default Hero;
