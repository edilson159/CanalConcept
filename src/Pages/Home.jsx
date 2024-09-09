import { useEffect, useState } from "react";
import Data from "../components/Data/Data";
import Header from "../components/Header/Header";
import { Context } from "../components/Context/Context";
import HeaderBenefit from "../components/HeaderBenefit/HeaderBenefit";
import Banner1 from "../components/Banner1/Banner1";
import SectionBanner1 from "../components/SectionBanner1/SectionBanner1";

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [hover, setHover] = useState(false);

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
      if (window.scrollY > 80) {
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

  return (
    <Context.Provider
      value={{
        isMobile,
        setIsMobile,
        hover,
        setHover,
        scrolled3,
        setScroulled,
      }}
    >
      <section>
        <HeaderBenefit
          data={props.data || Data.find((e) => e.headerBenfit).headerBenfit}
        />
        {isMobile ? (
          <Header
            data={
              props.data ||
              Data.find((e) => e.headerMobile).headerMobile.find(
                (e) => e.informations
              ).informations
            }
          />
        ) : (
          <Header />
        )}
        {isMobile ? (
          <Banner1
            data={props.data || Data.find((e) => e.bannerMobile).bannerMobile}
          />
        ) : (
          <Banner1 />
        )}
        <SectionBanner1
          data={props.data || Data.find((e) => e.sectionBanner1).sectionBanner1}
        />
      </section>
    </Context.Provider>
  );
};

export default Home;
