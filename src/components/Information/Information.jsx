import Data from "../Data/Data";
import "./Information.css";

const Information = () => {
  return (
    <section className="container-informations">
      {Data.find((e) => e.informations).informations.map(
        ({ title, children }, index) => (
          <div key={index} className="container-informations-card">
            <h2>{title}</h2>
            <div className="container-informations-description">
              {children.map(({ name, link }, index) => (
                <a key={index} href={link}>
                  {name}
                </a>
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Information;
