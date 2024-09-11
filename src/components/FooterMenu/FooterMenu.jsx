import Data from "../Data/Data";
import "./FooterMenu.css";

const FooterMenu = () => {
  return (
    <footer className="container-footer-menu">
      {Data.find((e) => e.footerMenu).footerMenu.map(
        ({ name, icon }, index) => (
          <div className="container-footer-menu-card" key={index}>
            <img
              className="container-footer-menu-card-icon"
              src={icon}
              alt=""
            />
            <p className="container-footer-menu-card-name">{name}</p>
          </div>
        )
      )}
    </footer>
  );
};

export default FooterMenu;
