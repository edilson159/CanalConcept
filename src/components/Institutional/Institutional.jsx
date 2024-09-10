import Data from "../Data/Data";
import "./Institutional.css";

const Institutional = () => {
  return (
    <section className="container-institutional">
      {Data.find((e) => e.institutional).institutional.map(
        ({ description1, description2, span, ancora, link, icon }, index) => (
          <div className="container-institutional-card" key={index}>
            <p className="container-institutional-description">
              {description1}{" "}
              <span className="container-institutional-span">{span}</span>
              {description2}
            </p>
            <div className="container-institutional-card-p1">
              <a className="container-institutional-ancora" href={link}>
                {ancora}
              </a>

              <img className="container-institutional-icon" src={icon} alt="" />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Institutional;
