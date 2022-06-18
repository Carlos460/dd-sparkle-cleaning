import WorkCarousel from '@includes/WorkCarousel';
import { Row, Col } from 'antd';

import * as S from '@styles/Sparkle.styles';

const WorkShowcase = () => {
  return (
    <>
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
                    We clean apartments, family homes, offices, and much more!
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WorkShowcase;
