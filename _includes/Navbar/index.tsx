import Link from 'next/link'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Container>
      <S.BrandName>D.D. Sparkle Cleaning</S.BrandName>
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
    </S.Container>
  );
}

export default Navbar;
