import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from '@includes/Navbar'

import {Row, Col} from 'antd'

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
        <h1>DD Sparkle Cleaning, cleaning servives</h1>
      </main>
    </>
  )
}

export default Home
