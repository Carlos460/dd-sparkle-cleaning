import styled from 'styled-components';

interface IContainerProps {
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export const Wrapper = styled.div<IContainerProps>`
  background-color: ${(props) => props.bgColor || 'transparent'};
  position: relative;
`;

export const Hamburger = styled.div`
  height: 70px;
  width: 70px;

  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

interface IHamNavList {
  rightPos: string;
}

export const HamNavList = styled.div<IHamNavList>`
  width: 100px;
  height: 100vh;
  background-color: white;
  list-style: none;
  padding: 0px 5px;

  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 0px;
  right: ${(props) => props.rightPos};
  transition: right 0.4s ease-in-out;
`;

export const LineWrap = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

interface ILineProps {
  rotateDeg: string;
}

export const Line = styled.div<ILineProps>`
  margin: 2px 0px;
  width: 35px;
  height: 4px;
  border-radius: 5px;
  background-color: black;
`;

export const Container = styled.div<IContainerProps>`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;

  & > div > a {
    color: ${(props) => props.textColor || 'transparent'};
  }
  & > div > a:hover {
    color: ${(props) => props.hoverTextColor || 'transparent'};
  }
  & > ul > li > a {
    color: ${(props) => props.textColor || 'transparent'};
    text-decoration: none;
  }
  & > ul > li > a:hover {
    color: ${(props) => props.hoverTextColor || 'transparent'};
  }
`;

export const BrandName = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  margin: auto 0px;
`;

export const NavList = styled.ul`
  width: 250px;
  margin: auto 0px;

  list-style: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavLink = styled.li``;
