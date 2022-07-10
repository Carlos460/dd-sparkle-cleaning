import Link from 'next/link';
import * as S from './styles';

const OurServices = () => {
  return (
    <S.SectionContainer>
      <S.Header>
        <S.Title>Services we</S.Title>
        <S.Title color="var(--primary)">Provide</S.Title>
      </S.Header>

      <S.Text>
        <div>
          We provide professional cleaning for your home, giving you ample time
          to focus on on yourself.
        </div>
        <br />
        <div>
          {`Are you moving in or out of your home? No problem, we've got you
          covered! Make an appointment to set yourself up for success.`}
        </div>
        <br />
        <div>
          Need help cleaning after a party? We’ll get it done in no time.
        </div>
        <br />
        <div>
          Re-occuring appointments to make sure you always have a piece of mind?
          We can get you booked in with us!
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

        <S.LinkContainer>
          <Link href={'/contact'}>
            <a>
              <S.RequestLink>
                <p>Request an Estimate</p> <S.Arrow />
              </S.RequestLink>
            </a>
          </Link>
        </S.LinkContainer>
      </S.BoxContainer>
    </S.SectionContainer>
  );
};

export default OurServices;
