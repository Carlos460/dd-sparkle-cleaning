import Link from 'next/link';
import * as S from './styles';

import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { isatty } from 'tty';

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
  const showHamNavList = () => {};

  useEffect(() => {
    isActive ? setPosition('0px') : setPosition('-300px');
  }, [isActive]);

  return (
    <S.Wrapper bgColor={theme.bgColor}>
      <S.HamNavList rightPos={position}>
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
      </S.HamNavList>
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
            <S.Hamburger>
              <S.LineWrap
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <S.Line rotateDeg="-45deg" />
                <S.Line rotateDeg="0deg" />
                <S.Line rotateDeg="45deg" />
              </S.LineWrap>
            </S.Hamburger>
          </S.Container>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Navbar;
