import WorkCarousel from '@includes/WorkCarousel';
import Link from 'next/link';
import * as S from './styles';

const WorkShowcase = () => {
  return (
    <S.Container>
      <S.Title>Our Work</S.Title>
      <S.ContentWrapper>
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
      </S.ContentWrapper>
    </S.Container>
  );
};

export default WorkShowcase;
