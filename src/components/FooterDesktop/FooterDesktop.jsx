import Data from "../Data/Data";
import Information from "../Information/Information";
import Register from "../Register/Register";
import "./FooterDesktop.css";

const FooterDesktop = () => {
  return (
    <footer className="container-footer-desktop">
      <div className="container-footer-desktop-card">
        <div className="container-footer-desktop-card-1">
          <div className="container-footer-desktop-card-1-p1">
            <Information />
            <div className="container-footer-desktop-card-1-p1-p">
              {Data.find((e) => e.footer).footer.map(({ img }, index) =>
                img === "../imgs/imgSocial.svg" || img === "../imgs/app.svg" ? (
                  <img key={index} src={img} alt="" />
                ) : null
              )}
            </div>
          </div>
          <div className="container-footer-desktop-card-1-p2">
            {Data.find((e) => e.footer).footer.map(({ img, name }, index) => (
              <div key={index}>
                {name && <p>{name}</p>}
                {img === "../imgs/pgmt.svg" ||
                img === "../imgs/certificado.svg" ? (
                  <div className="container-footer-desktop-card-1-p2-card-p1">
                    <img key={index} src={img} alt="" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <Register />
      </div>
    </footer>
  );
};

export default FooterDesktop;
