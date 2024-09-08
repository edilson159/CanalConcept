import { useEffect, useState } from "react";
import Data from "../components/Data/Data";
import Header from "../components/Header/Header";
import { Context } from "../components/Context/Context";
import HeaderBenefit from "../components/HeaderBenefit/HeaderBenefit";

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

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

  return (
    <Context.Provider value={{ isMobile, setIsMobile }}>
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
      </section>
    </Context.Provider>
  );
};

export default Home;
