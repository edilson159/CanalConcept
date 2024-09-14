import "./HeaderBenefit.css";

const HeaderBenefit = (props) => {
  return (
    <header className="container-header-benefit">
      {props.data.slice(1, 2).map(({ name }, index) => (
        <p className="container-header-benefit-item" key={index}>
          {name}
        </p>
      ))}
    </header>
  );
};

export default HeaderBenefit;
