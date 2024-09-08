import UseContext from "../Hook/UseContext";
import "./Header.css";

const Header = (props) => {
  const { isMobile } = UseContext();
  return (
    <header className={`container-header ${isMobile ? "mobile" : "desktop"}`}>
      <div className="container-header-card">
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
              <img key={index} src={icon} alt="" />
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
