import Link from "next/link";
import * as S from "./styles";
import { Title } from "@styles/Sparkle.styles";

const About = () => {
  return (
    <S.SectionContainer>
      <S.Header>About Us</S.Header>
      <S.InnerContainer>
        <S.Image></S.Image>

        <S.Content>
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
          <S.ButtonContainer>
            <S.Button>Services</S.Button>
            <S.Button>Contact Us</S.Button>
          </S.ButtonContainer>
        </S.Content>
      </S.InnerContainer>
    </S.SectionContainer>
  );
};

export default About;
