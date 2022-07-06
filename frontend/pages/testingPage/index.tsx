import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <Wrapper>1</Wrapper>
        <Wrapper>2</Wrapper>
        <Wrapper>3</Wrapper>
        <Wrapper>4</Wrapper>
      </Slider>
      asdf
    </div>
  );
}

const Wrapper = styled.div`
  height: 200px;
  background-color: #64748b;
`;
