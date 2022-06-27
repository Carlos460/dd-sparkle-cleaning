import Link from "next/link";
import * as S from "./styles";
import { Title } from "@styles/Sparkle.styles";

const OurServices = () => {
  return (
    <S.SectionContainer>
      <S.Header>
        <h1>Services for</h1>
        <br />
        <h1>Homes</h1>
      </S.Header>

      <S.Text>
        <h4>
          We provide professional cleaning for you home. Giving you the time to
          focus on on yourself
        </h4>
        <br />
        <h4>
          Moving in or out your home? No problem, we got you covered! Make an
          appointment to set yourself up for suceess.
        </h4>
        <br />
        Need help cleaning an after party, we’ll get it done in no time. <br />
        Want reoccuring appointments to make sure you always have a piece of
        mind? We can get you book in with us! <br />
      </S.Text>

      <S.BoxContainer>
        {/* <h1> Offices </h1>
        <h1> Homes </h1>
        <h1> Apartments </h1>
        <h1> Move In/Out </h1>
        <h1> Celebration After Parties </h1> */}
      </S.BoxContainer>

      <S.Link>
        {/* <a href="/contact"> Request an estimate &rarr </a> */}
      </S.Link>
    </S.SectionContainer>
  );
};

export default OurServices;
