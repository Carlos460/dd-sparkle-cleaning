import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@includes/Navbar';

import { Row, Col } from 'antd';

import * as S from '../styles/Home.styles';
import WorkCarousel from '@includes/WorkCarousel';
import Footer from '@includes/Footer';

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
                <S.CtaButton>Schedule Appointment</S.CtaButton>
              </S.Container>
            </Col>
          </Row>
          <S.ImageBubble />
          <S.HeaderWave />
        </S.Section>
        <S.Section backgroundColor={`var(--primary)`}>
          <Row justify="center">
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <S.Title textColor={`white`}>Our Work</S.Title>
              <Row justify="center">
                <Col>
                  <WorkCarousel />
                </Col>
                <Col xs={12} sm={12} lg={6}>
                  <div style={{ display: 'flex', height: '100%' }}>
                    <div style={{ margin: 'auto 20px' }}>
                      <h1>
                        We clean apartments, family homes, offices, and much
                        more!
                      </h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </S.Section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
