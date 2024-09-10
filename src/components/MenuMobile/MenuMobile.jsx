import "./MenuMobile.css";
import UseContext from "../Hook/UseContext";
import Data from "../Data/Data";

function Drawer({ open }) {
  return (
    <div
      className={`${
        open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 "></div>
    </div>
  );
}

const MenuMobile = () => {
  const { open, setOpen, scrolled3, hover } = UseContext();

  return (
    <section className={"container-menu-lateral"}>
      <button
        className={"container-menu-hamburguer "}
        onClick={() => setOpen(!open)}
      >
        {Data.find((e) => e.menuMobile).menuMobile.map(
          ({ iconMenu, iconMenuClose, nameOpen, nameClose }, index) =>
            open ? (
              <div key={index}>
                <img
                  className="container-menu-hamburguer-icon-close"
                  src={iconMenuClose}
                  alt=""
                />
                <p className="container-menu-hamburguer-name-close">
                  {nameClose}
                </p>
              </div>
            ) : (
              <div
                className={hover || scrolled3 ? "button-active" : ""}
                key={index}
              >
                <img
                  className="container-menu-hamburguer-icon-open"
                  src={iconMenu}
                  alt=""
                />
                <p className="container-menu-hamburguer-name-open">
                  {nameOpen}
                </p>
              </div>
            )
        )}
      </button>

      <Drawer open={open}></Drawer>
    </section>
  );
};

export default MenuMobile;
