import Link from 'next/link';
import * as S from './styles';

import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';

const colorThemes = {
  default: {
    bgColor: 'transparent',
    textColor: 'black',
    hoverTextColor: 'var(--primary)',
  },
  pink: {
    bgColor: 'var(--primary)',
    textColor: 'white',
    hoverTextColor: 'white',
  },
};

const Navbar = (props: { theme?: string }) => {
  const theme = props.theme === 'pink' ? colorThemes.pink : colorThemes.default;

  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState('-300px');
  const [opacity, setOpacity] = useState('0');
  const [pointerEvents, setPointerEvents] = useState('none');

  useEffect(() => {
    isActive ? setPosition('0px') : setPosition('-300px');
    isActive ? setOpacity('1') : setOpacity('0');
    isActive ? setPointerEvents('auto') : setPointerEvents('none');
  }, [isActive]);

  return (
    <S.Wrapper bgColor={theme.bgColor}>
      <S.HamListWrapper
        opacity={opacity}
        pointerEvents={pointerEvents}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <S.HamList rightPos={position}>
          <Link href="/">
            <a>
              <S.HamItem>Home</S.HamItem>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <S.HamItem>About</S.HamItem>
            </a>
          </Link>
          <Link href="/services">
            <a>
              <S.HamItem>Services</S.HamItem>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <S.HamItem>Contact</S.HamItem>
            </a>
          </Link>
        </S.HamList>
      </S.HamListWrapper>
      <Row justify="center">
        <Col xs={22} sm={18} lg={20} xxl={14}>
          <S.Container
            textColor={theme.textColor}
            hoverTextColor={theme.hoverTextColor}
          >
            <S.BrandName>
              <Link href={`/`}>
                <a>D.D. Sparkle Cleaning</a>
              </Link>
            </S.BrandName>
            <S.NavList>
              <S.NavLink>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </S.NavLink>
              <S.NavLink>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </S.NavLink>
            </S.NavList>
            <S.HamburgerWrapper>
              <S.Hamburger
                bgColor={theme.hoverTextColor}
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <S.Line bgColor={theme.textColor} />
                <S.Line bgColor={theme.textColor} />
                <S.Line bgColor={theme.textColor} />
              </S.Hamburger>
            </S.HamburgerWrapper>
          </S.Container>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Navbar;
