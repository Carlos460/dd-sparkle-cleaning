import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from '@includes/Navbar'

import {Row, Col} from 'antd'

import * as S from '../styles/Home.styles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sparkle Cleaning</title>
        <meta name="description" content="DD Sparkle Cleaning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Row justify="center">
          <Col xs={22} sm={18} lg={20} xxl={14}>
            <Navbar />
          </Col>
        </Row>
        <S.Section>
          <Row justify="center">
            <Col xs={22} sm={18} lg={20} xxl={14}>
              <S.Container>
                <S.Title>Reliable <span style={{color: "#FF91AF"}}>Cleaning</span> Service</S.Title>
                <S.SubTitle>Full of experience and good references, cleaning apartments, homes, and offices!</S.SubTitle>
                <S.CtaButton>Schedule Appointment</S.CtaButton>
              </S.Container>
            </Col>
          </Row>
          <S.ImageBubble />
          <S.HeaderWave />
        </S.Section>
      </main>
    </>
  )
}

export default Home
