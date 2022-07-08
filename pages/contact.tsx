import { NextPage } from 'next';

import Navbar from '@includes/Navbar';
import Footer from '@includes/Footer';

import ContactUs from '@sections/ContactUs';

import { Row, Col } from 'antd';

import * as Sparkle from '@styles/Sparkle.styles';

const Contact: NextPage = () => {
  return (
    <>
      <Sparkle.Section>
        <Sparkle.Wave2 style={{ top: 70 }} />
        <Navbar theme="pink" />
        <Row justify="center">
          <Col xs={22} sm={18} lg={20} xxl={14}>
            <ContactUs />
          </Col>
        </Row>
      </Sparkle.Section>
      <Footer />
    </>
  );
};

export default Contact;
