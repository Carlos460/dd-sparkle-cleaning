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
            <S.Button>Learn More</S.Button>
            <S.Button>Submit Review</S.Button>
          </S.ButtonWrapper>
        </S.TestimonialWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Testimonials;
