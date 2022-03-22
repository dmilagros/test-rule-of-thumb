import React from "react";
import ThumbIcon from "../icons/ThumbIcon";
import "../styles/components/thumbsUp.css";

const ThumbsUp = ({ isSelected, onClick }) => {
  return (
    <div className={isSelected ? "thumbs-up--selected" : "thumbs-up"} onClick={onClick}>
      <ThumbIcon />
    </div>
  );
};

export default ThumbsUp;
