import Slider from "react-slick";
import "./Banner1.css";

const Banner1 = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <section className="container-banner-1">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {props.data.map(({ img, span, title, paragraph, button }, index) => (
          <div className="container-banner-1-card" key={index}>
            <div className="container-banner-1-description">
              <div className="container-banner-1-description-p1">
                <span className="container-banner-1-span">{span}</span>
                <h1 className="container-banner-1-title">{title}</h1>
                <p className="container-banner-1-paragraph">{paragraph}</p>
                <button className="container-banner-1-button">{button}</button>
              </div>
            </div>
            <img className="container-banner-1-img" src={img} alt="" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Banner1;
