import React from "react";

const Button = ({ text, className, id, href }) => {
  return (
    <a
      id={id}
      href={href}
      className={`${
        className ?? ""
      } cta-wrapper transition-transform duration-300 hover:scale-105`}
    >
      <div className="cta-button group bg-gradient-to-r from-teal-500 to-indigo-600 rounded-lg shadow-lg hover:shadow-xl">
        <div className="bg-circle" />
        <p className="text font-bold text-white text-lg"> {text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
