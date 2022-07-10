import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@includes/Navbar';
import Footer from '@includes/Footer';

import { Row, Col } from 'antd';

// Sections
import OurServices from '@sections/OurServices';

// Components
import * as S from '@styles/Sparkle.styles';

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkle Cleaning</title>
        <meta name="description" content="DD Sparkle Cleaning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.Section>
          <Navbar theme="pink" />
          <S.Wave style={{ transform: 'scaleY(-1)', top: 60 }} />
          <Row align="middle" justify="center" style={{ height: '100%' }}>
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <OurServices />
            </Col>
          </Row>
        </S.Section>
        <Footer />
      </main>
    </>
  );
};

export default Services;
