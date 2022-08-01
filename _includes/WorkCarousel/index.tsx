import { Carousel } from 'antd';
import * as S from './WorkCarousel.styles';

const WorkCarousel = () => {
  return (
    <S.Conatiner>
      <S.WhiteBlock />
      <Carousel autoplay={true} dotPosition="bottom">
        <div>
          <S.WorkImage urlImage={`/static/images/bathroom.webp`} />
        </div>
        <div>
          <S.WorkImage urlImage={`/static/images/bedroom.webp`} />
        </div>
        <div>
          <S.WorkImage urlImage={`/static/images/office.webp`} />
        </div>
      </Carousel>
    </S.Conatiner>
  );
};

export default WorkCarousel;
