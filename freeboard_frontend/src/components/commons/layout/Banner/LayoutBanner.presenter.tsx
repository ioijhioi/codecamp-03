import { 
  SliderItem, 
  Wrapper,
  SliderItemYoutube,
} from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItemYoutube src="/images/layout/ronaldo123.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/ronaldo123.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/ronaldo123.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
