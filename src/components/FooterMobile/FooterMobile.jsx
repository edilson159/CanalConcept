import Data from "../Data/Data";
import "./FooterMobile.css";

const FooterMobile = () => {
  return (
    <footer className="container-footer-mobile">
      {Data.find((e) => e.footer).footer.map(({ img, name }, index) => (
        <div className="container-footer-mobile-card" key={index}>
          <img src={img} alt="" />
          {name && <p>{name}</p>}
        </div>
      ))}
    </footer>
  );
};

export default FooterMobile;
