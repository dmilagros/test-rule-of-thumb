import React from "react";
import ThumbIcon from "../icons/ThumbIcon";
import "../styles/components/thumbsDown.css";

const ThumbsDown = ({ isSelected, onClick }) => {
  return (
    <div className={isSelected ? "thumbs-down--selected" : "thumbs-down"} onClick={onClick}>
      <ThumbIcon direction="down" />
    </div>
  );
};

export default ThumbsDown;
