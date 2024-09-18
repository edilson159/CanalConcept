import Slider from "react-slick";
import Data from "../Data/Data";
import "./ShowCaseProducts.css";

const ShowCaseProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4.5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3.5,
          slidesToScroll: 3.5,
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
          infinite: false,
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="container-showCase-products">
      <div className="container-showCase-products-card">
        {" "}
        {Data.find((e) => e.showCaseProducts).showCaseProducts.map(
          ({ title, name, ancora, link, iconArrow }, index) =>
            title && (
              <div key={index} className="container-showCase-products-header">
                <p>{name}</p>
                <h2>{title}</h2>
                <div className="container-showCase-products-header-p1">
                  <a href={link}>{ancora}</a>
                  <img src={iconArrow} alt="" />
                </div>
              </div>
            )
        )}
        <Slider {...settings}>
          {" "}
          {Data.find((e) => e.showCaseProducts).showCaseProducts.map(
            (
              { img, description, oldPrice, currentPrice, discount, span },
              index
            ) => (
              <div key={index} className="container-showCase-products-showCase">
                <div className="container-showCase-products-discount">
                  <p>
                    {discount} <span>{span}</span>
                  </p>
                </div>
                <img
                  className="container-showCase-products-img"
                  src={img}
                  alt=""
                />
                <div className="container-showCase-products-description">
                  <p className="container-showCase-products-description-item">
                    {description}
                  </p>
                  <div className="container-showCase-products-description-p1">
                    <p className="container-showCase-products-current-price">
                      {currentPrice}
                    </p>
                    <p className="container-showCase-products-old-price">
                      {oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default ShowCaseProducts;
