import UseContext from "../Hook/UseContext";
import "./Header.css";

const Header = (props) => {
  const { isMobile, scrolled3, setScroulled, hover, setHover } = UseContext();

  function togleHover() {
    if (window.scrollY > 40) {
      setHover(hover);
    } else {
      setHover(!hover);
    }
  }

  return (
    <header
      onMouseEnter={togleHover}
      onMouseLeave={togleHover}
      className={`container-header ${scrolled3 ? "active" : ""} ${
        hover ? "hover" : ""
      } ${isMobile ? "mobile" : "desktop"}`}
    >
      <div className={`container-header-card  `}>
        <div className="container-header-card-1">
          {props.data.slice(0, 2).map(({ icon, name }, index) => (
            <div className="container-header-card-1-p1" key={index}>
              <img src={icon} alt="" />
              {name && <p>{name}</p>}
            </div>
          ))}
        </div>
        <div className="container-header-card-2">
          {props.data.map(({ icon }, index) =>
            icon === "../imgs/iconSearch.svg" ? (
              <img
                className="container-header-img-search"
                key={index}
                src={icon}
                alt=""
              />
            ) : (
              ""
            )
          )}
          {props.data.slice(4, 5).map(({ icon, number }, index) => (
            <div className="container-header-card-2-p1" key={index}>
              <div className="container-header-card-3">
                <img src={icon} alt="" />
              </div>
              <p>{number}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
