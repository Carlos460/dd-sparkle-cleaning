import WorkCarousel from '@includes/WorkCarousel';
import Link from 'next/link';
import * as S from './styles';

const WorkShowcase = () => {
  return (
    <S.Wrapper>
      <S.Title>Our Work</S.Title>
      <S.Container>
        <S.LeftContent>
          <WorkCarousel />
        </S.LeftContent>
        <S.RightContent>
          <S.Text>
            We clean apartments, family homes, offices, and much more!
          </S.Text>
          <Link href={`/services`}>
            <a>
              <S.OutlinedButton>Our Services</S.OutlinedButton>
            </a>
          </Link>
        </S.RightContent>
      </S.Container>
    </S.Wrapper>
  );
};

export default WorkShowcase;
