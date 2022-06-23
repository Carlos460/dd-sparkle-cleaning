import styled from 'styled-components';

interface IContainerProps {
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

export const Wrapper = styled.div<IContainerProps>`
  background-color: ${(props) => props.bgColor || 'transparent'};
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
  width: 300px;
  margin: auto 0px;

  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled.li``;
