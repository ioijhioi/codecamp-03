import { Wrapper, Photo } from "./LayoutBanner.styles";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
};

export default function LayoutBannerUI() {
  return (
    <Wrapper>
      <h2>Fade</h2>
      <Slider {...settings}>
        <div>
          <Photo src="/images/ronaldo.jpg" />
        </div>
        <div>
          <Photo src="/images/ronaldo.jpg" />
        </div>
        <div>
          <Photo src="/images/ronaldo.jpg" />
        </div>
        <div>
          <Photo src="/images/ronaldo.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
