import React, { useEffect } from "react";
import ThumbIcon from "../icons/ThumbIcon";
import "../styles/components/gaugeBar.css";

const GaugeBar = ({ positive, negative, setHigher }) => {
  let average = 100 / (positive + negative);

	useEffect(() => {
		if(positive >= negative)
			setHigher("positive")
		else {
			setHigher("negative")
		}
	}, [positive, negative])
	
  return (
    <div className="gauge-bar">
      <div
        className="gauge-bar__thumbs-up"
        style={{ width: `${(positive * average).toFixed(1)}%` }}
      >
				<span className="gauge-bar__thumbs-up-text"><ThumbIcon /> {(positive * average).toFixed(1)}% </span></div>
      <div
        className="gauge-bar__thumbs-down"
        style={{ width: `${(negative * average).toFixed(1)}%` }}
      > <span className="gauge-bar__thumbs-down-text">{(negative * average).toFixed(1)}% <ThumbIcon direction="down" /></span></div>
    </div>
  );
};

export default GaugeBar;
