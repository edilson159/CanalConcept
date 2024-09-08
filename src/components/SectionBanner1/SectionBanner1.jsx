import "./SectionBanner1.css";

const SectionBanner1 = (props) => {
  return (
    <section className="container-section-banner-1">
      {props.data.map(({ img, span, title, paragraph, button }, index) => (
        <div className="container-section-banner-1-card" key={index}>
          <div className="container-section-banner-1-description">
            <span className="container-section-banner-1-span">{span}</span>
            <h1 className="container-section-banner-1-title">{title}</h1>
            <p className="container-section-banner-1-paragraph">{paragraph}</p>
            <button className="container-section-banner-1-button">
              {button}
            </button>
          </div>

          <img className="container-section-banner-1-img" src={img} alt="" />
        </div>
      ))}
    </section>
  );
};

export default SectionBanner1;
