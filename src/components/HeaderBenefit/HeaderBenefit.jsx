import UseContext from "../Hook/UseContext";
import "./HeaderBenefit.css";

const HeaderBenefit = (props) => {
  const { isMobile } = UseContext();
  return (
    <header className="container-header-benefit">
      {props.data.map(({ name }, index) =>
        isMobile ? (
          name === "parcele em até 10x sem juros" && (
            <p className="container-header-benefit-item" key={index}>
              {name}
            </p>
          )
        ) : (
          <p className="container-header-benefit-item" key={index}>
            {name}
          </p>
        )
      )}
    </header>
  );
};

export default HeaderBenefit;
