import {Carousel} from 'antd';
import * as S from './WorkCarousel.styles';

const WorkCarousel = () => {
  return (
    <S.Conatiner>
      <S.WhiteBlock />
      <Carousel autoplay={true} dotPosition="bottom">
        <div>
          <S.WorkImage />
        </div>
        <div>
          <S.WorkImage />
        </div>
        <div>
          <S.WorkImage />
        </div>
      </Carousel>
    </S.Conatiner>
  );
};

export default WorkCarousel;
