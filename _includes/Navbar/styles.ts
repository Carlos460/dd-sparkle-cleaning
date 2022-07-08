import { debug } from 'console';
import styled from 'styled-components';
import { rootCertificates } from 'tls';
import { isNativeError } from 'util/types';

interface IContainerProps {
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export const Wrapper = styled.div<IContainerProps>`
  background-color: ${(props) => props.bgColor || 'transparent'};
  position: relative;
`;

export const HamburgerWrapper = styled.div`
  height: 70px;
  width: 70px;

  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

interface IHamburgerProps {
  bgColor: string;
}

export const Hamburger = styled.div<IHamburgerProps>`
  margin: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    & > div {
      background-color: ${(props) => props.bgColor};
    }
  }
`;

interface ILineProps {
  bgColor: string;
}

export const Line = styled.div<ILineProps>`
  margin: 2px 0px;
  width: 35px;
  height: 4px;
  background-color: ${(props) => props.bgColor};
  transition: background-color 0.3s;
`;

interface IHamListWrapperProps {
  opacity: string;
  pointerEvents: string;
}

export const HamListWrapper = styled.div<IHamListWrapperProps>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 8;

  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => props.pointerEvents};
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.4s;
`;

interface IHamList {
  rightPos: string;
}

export const HamList = styled.ul<IHamList>`
  width: 250px;
  height: 100vh;
  background-color: white;
  list-style: none;

  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 0px;
  right: ${(props) => props.rightPos};
  transition: right 0.4s ease-in-out;
`;

export const HamItem = styled.li`
  width: 100%;
  padding-left: 10px;

  color: black;
  font-size: 25px;
  margin: 10px 0px;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--primary);
  }
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
