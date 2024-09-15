import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import Data from "../components/Data/Data";
import Header from "../components/Header/Header";
import { Context } from "../components/Context/Context";
import HeaderBenefit from "../components/HeaderBenefit/HeaderBenefit";
import Banner1 from "../components/Banner1/Banner1";
import SectionBanner1 from "../components/SectionBanner1/SectionBanner1";
import Institutional from "../components/Institutional/Institutional";
import ShowCaseProducts from "../components/ShowCaseProducts/ShowCaseProducts";
import ShowCaseCategory from "../components/ShowCaseCategory/ShowCaseCategory";
import SectionBanner2 from "../components/SectionBanner2/SectionBanner2";
import Register from "../components/Register/Register";
import Information from "../components/Information/Information";
import FooterMobile from "../components/FooterMobile/FooterMobile";

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState();
  const [summaryOpen, setSummaryOpen] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrolled3, setScroulled] = useState(false);

  useEffect(() => {
    const handleScroull = () => {
      if (window.scrollY > 40) {
        setScroulled(true);
      } else {
        setScroulled(false);
      }
    };

    window.addEventListener("scroll", handleScroull);

    return () => {
      window.removeEventListener("scroll", handleScroull);
    };
  }, []);

  function toggleScrollPageHome() {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  toggleScrollPageHome();

  return (
    <Context.Provider
      value={{
        isMobile,
        setIsMobile,
        hover,
        setHover,
        scrolled3,
        setScroulled,
        open,
        setOpen,
        summaryOpen,
        setSummaryOpen,
        detailsRef,
      }}
    >
      <section>
        <HeaderBenefit
          data={props.data || Data.find((e) => e.headerBenfit).headerBenfit}
        />
        {isMobile && (
          <Header
            data={
              props.data ||
              Data.find((e) => e.headerMobile).headerMobile.find(
                (e) => e.informations
              ).informations
            }
          />
        )}

        {!isMobile && (
          <Header
            data={props.data || Data.find((e) => e.headerDesktop).headerDesktop}
            // names={props.name || Data.find(e => e.headerDesktop).headerDesktop.find(e => e.names)}
          />
        )}

        {isMobile && (
          <Banner1
            data={props.data || Data.find((e) => e.bannerMobile).bannerMobile}
          />
        )}

        {!isMobile && (
          <Banner1 data={Data.find((e) => e.banner1Desktop).banner1Desktop} />
        )}
        <SectionBanner1 />
        <Institutional />
        <ShowCaseProducts />
        <ShowCaseCategory />
        <SectionBanner2 />
        <Register />
        <Information />
        <FooterMobile />
      </section>
    </Context.Provider>
  );
};

Home.propTypes = {
  data: PropTypes.array, // Altere o tipo conforme necessário, como PropTypes.array.isRequired
};

export default Home;
