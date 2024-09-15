import Slider from "react-slick";
import Data from "../Data/Data";
import "./ShowCaseCategory.css";

const ShowCaseCategory = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="container-showCase-category">
      <Slider {...settings}>
        {Data.find((e) => e.showCaseCategory).showCaseCategory.map(
          ({ img, title, name, link, icon }, index) => (
            <div key={index} className="container-showCase-category-card">
              <div className="container-showCase-category-description">
                <h2>{title}</h2>
                <div className="container-showCase-category-description-p1">
                  <a href={link}>{name}</a>
                  <img src={icon} alt="" />
                </div>
              </div>
              <img
                className="container-showCase-category-img"
                src={img}
                alt=""
              />
            </div>
          )
        )}
      </Slider>
    </section>
  );
};

export default ShowCaseCategory;
