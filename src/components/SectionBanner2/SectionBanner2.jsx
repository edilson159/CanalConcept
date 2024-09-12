import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./SectionBanner2.css";

const SectionBanner2 = () => {
  const { isMobile } = UseContext();

  return (
    <section className="container-section-banner-2">
      {isMobile
        ? Data.find((e) => e.sectionBanner2)
            .sectionBanner2.slice(1, 3)
            .map(({ img, name, ancora, link, icon }, index) => (
              <div key={index} className="container-section-banner-2-card">
                <div className="container-section-banner-2-description">
                  <h2>{name}</h2>
                  <div className="container-section-banner-2-description-p1">
                    <a href={link}>{ancora}</a>
                    <img src={icon} alt="" />
                  </div>
                </div>{" "}
                <img
                  className="container-section-banner-2-img"
                  src={img}
                  alt=""
                />
              </div>
            ))
        : ""}
    </section>
  );
};

export default SectionBanner2;
