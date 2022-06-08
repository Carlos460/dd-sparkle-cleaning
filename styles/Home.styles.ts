import styled from "styled-components";

export const Section = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  min-height: 60%;
  width: 100%;
  padding: 100px 0px 0px;
  /* antd xxl screens */
  @media (min-width: 1600px) {
    padding: 200px 0px 0px;
  }
`;

export const Title = styled.h1`
  width: 600px;
  margin: 0px;

  font-family: sans-serif;
  font-size: 65px;
  font-weight: 600;
  line-height: 70px;
  & > span {
    font-family: sans-serif;
  }
  /* antd xl screens */
  @media (max-width: 1200px ) {
    width: 700px;  
  }
  /* antd lg screens */
  @media (max-width: 768px ) {
    width: 450px;  
    font-size: 50px;
    line-height: 40px;
  }
  /* antd xs screens */
  @media (max-width: 480px ) {
    width: 300px;
    line-height: 50px;
  }
`;
export const SubTitle = styled.h2`
  width: 400px;
  margin: 20px 0px 0px;

  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  /* antd lg screens */
  @media (max-width: 768px ) {
    width: 400px;  
    margin: 12px 0px 0px;

    font-size: 18px;
  }
`;
export const CtaButton = styled.button`
  width: 200px;
  height: 45px;
  margin: 20px 0px 0px;
  font-size: 17px;

  color: white;
  background-color: var(--primary);
  border: solid 2px var(--primary);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color .4s, color .4s;
  &:hover {
    background-color: rgba(0,0,0,0);
    color: var(--primary);
  }
  &:active {
    background-color: var(--primary);
    color: white;
  }
`;

export const ImageBubble = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 800px;
  background-color: black;
  background-image: url("/clean_glass.webp");
  background-size: cover;
  background-position: 0px -300px;
  transform: scale(-1, 1);
  z-index: -1;


  position: absolute;
  bottom: 0px;
  right: -100px;
  transition: width 0.4s, height  0.4s, border-radius  0.4s, bottom  0.4s, right  0.4s, background-position  0.4s;

  /* antd xl screens */
  @media (max-width: 1200px ) {
    width: 600px;
    height: 600px;
    border-radius: 600px;

    bottom:0px;
    right: -75px;
  }
  /* antd lg screens */
  @media (max-width: 768px ) {
    width: 100%;  
    height: 100%;
    bottom: 0px;
    right: 0px;
    background-position: center;
    border-radius: 0px;
  }
`;

export const HeaderWave = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("/wave-1.svg");
  background-size: cover;
  position: absolute;
  bottom: 0px;
`;
