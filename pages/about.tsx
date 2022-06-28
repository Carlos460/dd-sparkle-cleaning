import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@includes/Navbar';
import Footer from '@includes/Footer';
import AboutUs from '@sections/AboutUs';

import { Row, Col } from 'antd';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkle Cleaning</title>
        <meta name="description" content="DD Sparkle Cleaning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Row justify="center">
          <Col xs={22} sm={18} lg={20} xxl={14}>
            <AboutUs />
          </Col>
        </Row>
        <Footer />
      </main>
    </>
  );
};

export default About;
