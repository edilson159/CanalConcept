import React from "react";
import Data from "../Data/Data";
import "./Register.css";

const Register = () => {
  return (
    <section className="container-register">
      {Data.find((e) => e.register).register.map(
        ({ title, name, placeholder, input, button, span }, index) => (
          <div className="container-register-card" key={index}>
            {title && (
              <div className="container-register-header">
                <h2>{title}</h2>
                <p>
                  {name} <span>{span}</span>
                </p>
              </div>
            )}

            <input
              className="container-register-input"
              type={input}
              placeholder={placeholder}
            />

            {button && (
              <div className="container-register-button">
                <button className="container-register-button-item">
                  {button}
                </button>
              </div>
            )}
          </div>
        )
      )}
    </section>
  );
};

export default Register;
