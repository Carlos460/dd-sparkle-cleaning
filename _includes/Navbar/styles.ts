import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
`;

export const BrandName = styled.h1`
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

export const NavLink = styled.li`
  & > a {
    color: #232323;
    text-decoration: none;
  }
  & > a:hover {
    color: #000000;
  }
`;
