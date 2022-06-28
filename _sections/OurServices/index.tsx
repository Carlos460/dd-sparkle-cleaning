import Link from "next/link";
import * as S from "./styles";
import { Title } from "@styles/Sparkle.styles";

const OurServices = () => {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.Title>Services for</S.Title>
        <S.Title color="var(--primary)">Homes</S.Title>
      </S.Header>

      <S.Text>
        <div>
          We provide professional cleaning for you home. Giving you the time to
          focus on on yourself.
        </div>
        <br />
        <div>
          Moving in or out of your home? No problem, we've got you covered! Make
          an appointment to set yourself up for success.
        </div>
        <br />
        <div>
          Need help cleaning after a party? We’ll get it done in no time.
        </div>
        <br />
        <div>
          Re-occuring appointments to make sure you always have a piece of mind?
          We can get you booked in with us! <br />
        </div>
      </S.Text>

      <S.BoxContainer>
        <S.Row>
          <S.Box>Offices</S.Box>

          <S.Box>Homes</S.Box>

          <S.Box>Apartments</S.Box>

          <S.Box>
            <div>Moving In</div>
            <div>Moving Out</div>
          </S.Box>

          <S.Box>
            <div>Celebration</div>
            <div>After Parties</div>
          </S.Box>

          <S.Box>Housekeeping</S.Box>
        </S.Row>

        <Link href={"/contact"}>Request an estimate</Link>
        <div style={{ backgroundImage: "publicIconsArrow.svg" }}></div>
      </S.BoxContainer>
    </S.SectionContainer>
  );
};

export default OurServices;
