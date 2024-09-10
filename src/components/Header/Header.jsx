import MenuMobile from "../MenuMobile/MenuMobile";
import UseContext from "../Hook/UseContext";
import "./Header.css";

const Header = (props) => {
  const { isMobile, scrolled3, hover, setHover, open } = UseContext();

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
      } ${open ? "open active" : ""} ${isMobile ? "mobile" : "desktop"}`}
    >
      <div className={`container-header-card  `}>
        <div className="container-header-card-1">
          <div className="container-header-card-1-p1">
            <MenuMobile />
            {props.data.map(
              ({ icon }, index) =>
                icon === "../imgs/logoMain.svg" && (
                  <img
                    className="container-header-img-logo"
                    key={index}
                    src={icon}
                    alt=""
                  />
                )
            )}
          </div>
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
          {props.data.slice(2, 3).map(({ icon, number }, index) => (
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
