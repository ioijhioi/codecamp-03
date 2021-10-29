import { 
  SliderItem, 
  Wrapper,
  // SliderItemYoutube,
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
    autoplay: true,
    autoplaySpeed: 3000,
    
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/layout/camping2.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/camping1.jpg" />
        </div>
        <div>
          <SliderItem src="/images/layout/0429_캠핑_12.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
