import "./MenuMobile.css";
import UseContext from "../Hook/UseContext";
import Data from "../Data/Data";
import SummaryMenu from "../SummaryMenu/SummaryMenu";

function Drawer({ open }) {
  return (
    <div
      className={`${
        open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 ">
        <SummaryMenu />
      </div>
    </div>
  );
}

const MenuMobile = () => {
  const {
    open,
    setOpen,
    scrolled3,
    hover,
    // setSummaryOpen,
    // summaryOpen,
    detailsRef,
  } = UseContext();

  function toggleOpen() {
    setOpen(!open);
    // setOpen((prevOpen) => !prevOpen);
    // setSummaryOpen((prevSummaryOpen) => !prevSummaryOpen);
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }

  return (
    <section className={"container-menu-lateral"}>
      <button className={"container-menu-hamburguer "}>
        {Data.find((e) => e.menuMobile).menuMobile.map(
          ({ iconMenu, iconMenuClose, nameOpen, nameClose }, index) =>
            open ? (
              <div onClick={toggleOpen} key={index}>
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
                onClick={toggleOpen}
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
