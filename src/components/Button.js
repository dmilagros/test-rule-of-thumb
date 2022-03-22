import React from "react";
import "../styles/components/button.css";

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
