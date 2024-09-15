import Data from "../Data/Data";
import "./SectionBanner1.css";

const SectionBanner1 = () => {
  return (
    <section className="container-section-banner-1">
      <div className="container-section-banner-1-card-main">
        {Data.find((e) => e.sectionBanner1).sectionBanner1.map(
          ({ img, span, title, paragraph, button }, index) => (
            <div
              className={
                img === "../imgs/banner2.svg"
                  ? "container-section-banner-1-card card-1 "
                  : "container-section-banner-1-card card-2"
              }
              key={index}
            >
              <div className="container-section-banner-1-description">
                <span className="container-section-banner-1-span">{span}</span>
                <h1 className="container-section-banner-1-title">{title}</h1>
                <p className="container-section-banner-1-paragraph">
                  {paragraph}
                </p>
                <button className="container-section-banner-1-button">
                  {button}
                </button>
              </div>
              <img
                className="container-section-banner-1-img"
                src={img}
                alt=""
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SectionBanner1;
