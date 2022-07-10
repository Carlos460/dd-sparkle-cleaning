import Link from 'next/link';
import * as S from './styles';

const Testimonials = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Testimonials</S.Title>
        <S.TestimonialWrapper>
          <S.ProfileImage />
          <S.TestimonialText>
            {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua!"`}
          </S.TestimonialText>
          <S.ButtonWrapper>
            <Link href={`/about`}>
              <a>
                <S.Button>Learn More</S.Button>
              </a>
            </Link>
            <Link href={`/contact`}>
              <a>
                <S.Button>Submit Review</S.Button>
              </a>
            </Link>
          </S.ButtonWrapper>
        </S.TestimonialWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Testimonials;
