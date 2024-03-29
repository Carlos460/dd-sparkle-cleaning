import styled from 'styled-components';

interface ISectionProps {
  backgroundColor?: string;
}

export const Section = styled.div<ISectionProps>`
  min-height: 100vh;
  width: 100%;

  position: relative;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

interface ITitleProps {
  textColor?: string;
  textSize?: string;
  lineHieght?: string;
}

export const Title = styled.h1<ITitleProps>`
  width: 600px;
  margin: 100px 0px 0px;

  color: ${(props) => props.textColor || 'black'};
  font-family: sans-serif;
  font-size: 55px;
  font-weight: 600;
  line-height: 55px;
  & > span {
    font-family: sans-serif;
  }
  /* antd xxl screens */
  @media (min-width: 1600px) {
    margin-top: 200px;
  }
  /* antd xl screens */
  @media (max-width: 1200px) {
    width: 700px;
  }
  /* antd lg screens */
  @media (max-width: 768px) {
    width: 450px;
    font-size: 50px;
    line-height: 50px;
  }
  /* antd xs screens */
  @media (max-width: 480px) {
    width: 300px;
    line-height: 50px;
  }
`;

interface ISubTitleProps {
  textColor?: string;
  textSize?: string;
  lineHieght?: string;
}

export const SubTitle = styled.h2<ISubTitleProps>`
  width: 400px;
  margin: 20px 0px 0px;

  color: ${(props) => props.textColor || 'black'};
  font-size: ${(props) => props.textSize || '16px'};
  line-height: ${(props) => props.lineHieght || '30px'};
  letter-spacing: 0.5px;
  /* antd lg screens */
  @media (max-width: 768px) {
    margin: 12px 0px 0px;
  }
`;

export const Wave = styled.div`
  width: 100%;
  height: 200px;
  background-image: url('/static/vectors/wave-1.svg');
  background-size: cover;
  position: absolute;
  bottom: -10px;
  @media (max-width: 800px) {
    height: 100px;
  }
`;

export const Wave2 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url('static/vectors/wave-2.svg');
  background-size: cover;
  position: absolute;
  bottom: 0px;
  @media (max-width: 800px) {
    height: 200px;
  }
`;

export const ImageBubble = styled.div`
  width: 700px;
  height: 700px;
  border-radius: 700px;
  background-image: url('/static/images/clean-glass.webp');
  background-size: cover;
  background-position: 0px -300px;
  transform: scale(-1, 1);
  z-index: -1;

  position: absolute;
  bottom: -25px;
  right: -100px;
  transition: width 0.4s, height 0.4s, border-radius 0.4s, bottom 0.4s,
    right 0.4s, background-position 0.4s;

  /* antd xl screens */
  @media (max-width: 1200px) {
    width: 600px;
    height: 600px;
    border-radius: 600px;

    bottom: 0px;
    right: -75px;
  }
  /* antd lg screens */
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    bottom: 0px;
    right: 0px;
    background-position: center;
    border-radius: 0px;
  }
`;
