import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@includes/Navbar';

import { Row, Col, Button } from 'antd';

// Sections
import WorkShowcase from '@sections/WorkShowcase';

// Components
import * as S from '@styles/Sparkle.styles';
import Footer from '@includes/Footer';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkle Cleaning</title>
        <meta name="description" content="DD Sparkle Cleaning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Section>
          <Row justify="center">
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <Navbar />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <S.Container>
                <S.Title>
                  Reliable <span style={{ color: '#FF91AF' }}>Cleaning</span>{' '}
                  Service
                </S.Title>
                <S.SubTitle>
                  Full of experience and good references, cleaning apartments,
                  homes, and offices!
                </S.SubTitle>
                <Link href={`/contact`}>
                  <a>
                    <S.CtaButton>Schedule Appointment</S.CtaButton>
                  </a>
                </Link>
              </S.Container>
            </Col>
          </Row>
          <S.ImageBubble />
          <S.HeaderWave />
        </S.Section>
        <S.Section backgroundColor={`var(--primary)`}>
          <WorkShowcase />
        </S.Section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
