import WorkCarousel from '@includes/WorkCarousel';
import { Row, Col } from 'antd';

import * as Sparkle from '@styles/Sparkle.styles';
import * as S from './styles';

const WorkShowcase = () => {
  return (
    <>
      <Row justify="center">
        <Col xs={22} sm={18} lg={20} xxl={14}>
          <Sparkle.Title textColor={`white`}>Our Work</Sparkle.Title>
          <S.Container>
            <S.ContentWrapper>
              <S.LeftContent>
                <WorkCarousel />
              </S.LeftContent>
              <S.RightContent>
                <S.Text>
                  We clean apartments, family homes, offices, and much more!
                </S.Text>
                <S.OutlinedButton>Our Services</S.OutlinedButton>
              </S.RightContent>
            </S.ContentWrapper>
          </S.Container>
        </Col>
      </Row>
    </>
  );
};

export default WorkShowcase;
