import * as S from "./Footer.styles";
import Link from "next/link";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <S.Wrapper>
      <Row justify="center">
        <Col xs={22} sm={18} lg={20} xxl={14}>
          <S.SectionContainer>
            <S.Left>
              <ul>
                <li>
                  <Link href={"/"}>
                    <a>
                      <S.Title>D.D. Sparkle Cleaning </S.Title>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href={"/about"}>
                    <a> About </a>
                  </Link>
                </li>

                <li>
                  <Link href={"/services"}>
                    <a> Services </a>
                  </Link>
                </li>

                <li>
                  <Link href={"/contact"}>
                    <a> Contact </a>
                  </Link>
                </li>
              </ul>
            </S.Left>

            <S.Right>
              <S.Title>Dulce Contact Info</S.Title>
              <S.FooterText>(347)-337-9903</S.FooterText>
              <S.FooterText> dlcdulce7@gmail.com </S.FooterText>
              <S.FooterText>New York City, New York</S.FooterText>
            </S.Right>
          </S.SectionContainer>
        </Col>
      </Row>
    </S.Wrapper>
  );
};

export default Footer;
