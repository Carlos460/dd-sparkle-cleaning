import Link from "next/link";

import * as S from "./styles";

const About = () => {
  return (
    <S.SectionContainer>
      <S.Header>About Us</S.Header>
      <S.ContentWrapper>
        <S.Image />
        <S.ContentContainer>
          <S.Text>
            <p>My name is Dulce and I’m the owner of D.D. Sparkle Cleaning.</p>
            <p>
              We are located in New York City and offer professional cleaning
              for a variety of clients.
            </p>
            <p>
              Vestibulum eros ante, sodales id vehicula nec, bibendum id velit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              dui ipsum, fermentum ut ullamcorper vitae, vulputate nec augue. Ut
              condimentum nisl eu dictum interdum.
            </p>
            <p>
              Nullam molestie dapibus elit id luctus. Nullam pretium rhoncus
              orci, fermentum eleifend augue faucibus at. Integer sodales ipsum
              ut malesuada iaculis. Cras nec placerat purus. Proin neque ante,
              sollicitudin non dictum sit amet, commodo non diam.
            </p>
          </S.Text>
          <S.ButtonList>
            <Link href={`/services`}>
              <S.ButtonItem>
                <S.Button>Services</S.Button>
              </S.ButtonItem>
            </Link>
            <Link href={`/contact`}>
              <S.ButtonItem>
                <S.Button>Contact Us</S.Button>
              </S.ButtonItem>
            </Link>
          </S.ButtonList>
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.SectionContainer>
  );
};

export default About;
