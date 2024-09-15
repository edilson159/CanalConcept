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
            {isMobile && <MenuMobile />}
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
            {!isMobile && (
              <div className="container-header-search">
                {props.data
                  .find((e) => e.icons)
                  .icons.map(
                    ({ icon }, index) =>
                      icon === "../imgs/iconSearch.svg" && (
                        <img key={index} src={icon} alt="" />
                      )
                  )}
                {props.data
                  .find((e) => e.names)
                  .names.map(
                    ({ name, link }, index) =>
                      name === "_buscar" && (
                        <a key={index} href={link}>
                          {name}
                        </a>
                      )
                  )}
              </div>
            )}
          </div>
        </div>
        {!isMobile && (
          <div className="container-header-names">
            {props.data
              .find((e) => e.names)
              .names.map(
                ({ name, link }, index) =>
                  name !== "_buscar" && (
                    <a
                      className={name === "outlet" ? "name-outlet" : ""}
                      key={index}
                      href={link}
                    >
                      {name}
                    </a>
                  )
              )}
          </div>
        )}
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

          {!isMobile &&
            props.data
              .find((e) => e.icons)
              .icons.slice(1, 4)
              .map(({ icon }, index) => (
                <img
                  className="container-header-icons"
                  key={index}
                  src={icon}
                  alt=""
                />
              ))}

          {!isMobile &&
            props.data
              .find((e) => e.icons)
              .icons.slice(4, 5)
              .map(({ icon, number }, index) => (
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
