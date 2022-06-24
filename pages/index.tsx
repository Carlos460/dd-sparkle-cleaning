import type {NextPage} from 'next';
import Head from 'next/head';
import Navbar from '@includes/Navbar';

import {Row, Col} from 'antd';

// Sections
import WorkShowcase from '@sections/WorkShowcase';

// Components
import * as S from '@styles/Sparkle.styles';
import Footer from '@includes/Footer';
import Hero from '@sections/Hero';
import Testimonials from '@sections/Testimonials';

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
          <Navbar />
          <Row justify="center">
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <Hero />
            </Col>
          </Row>
          <S.ImageBubble />
          <S.Wave />
        </S.Section>
        <S.Section backgroundColor={`var(--primary)`}>
          <Row align='middle' justify="center" style={{height: '100%'}}>
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <WorkShowcase />
            </Col>
          </Row>
        </S.Section>
        <S.Section>
          <Testimonials />
          <S.Wave style={{top: '0px', transform: 'scaleY(-1)'}} />
          <S.Wave />
        </S.Section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
