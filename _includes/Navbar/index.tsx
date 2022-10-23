import Link from 'next/link';
import * as S from './styles';

import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';

const colorThemes = {
  default: {
    bgColor: 'white',
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
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Hamburger Interaction
    isActive ? setPosition('0px') : setPosition('-300px');
    isActive ? setOpacity('1') : setOpacity('0');
    isActive ? setPointerEvents('auto') : setPointerEvents('none');

    // Scroll offset to calc navbar height
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive]);

  return (
    <S.Wrapper
      bgColor={theme.bgColor}
      textColor={theme.textColor}
      hoverTextColor={theme.hoverTextColor}
      boxshadowState={`${
        scrollPosition > 0 ? 'rgba(0, 0, 0, 0.16) 0px 1px 4px;' : 'none'
      }`}
    >
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
            bgColor={theme.bgColor}
            textColor={theme.textColor}
            hoverTextColor={theme.hoverTextColor}
            heightState={scrollPosition > 0 ? '65px' : '80px'}
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
