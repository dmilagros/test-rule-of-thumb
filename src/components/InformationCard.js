import React from "react";
import Button from "./Button";
import ThumbsDown from "./ThumbsDown";
import ThumbsUp from "./ThumbsUp";
import { renderTime } from "../helpers/getTime";
import "../styles/components/informationCard.css";

const InformationCard = ({
	isList,
  name,
  description,
  dateUpdated,
  category,
  voted,
  selectedVote,
  setSelectedVote,
	onClick,
	setHigher
}) => {

  return (
    <div className={isList ? "information-card-list" : "information-card"}>
      <div className="information-card__section-text">
        <h2 className={isList ? "information-card__name--list" : "information-card__name"}>
          <span className="information-card__name-text">{name}</span>
        </h2>
        <p className="information-card__description">{description}</p>
      </div>
				<div className="information-card__section-right">

        <p className="information-card__date-updated">
          {voted ? (
            <>Thank you for your vote!</>
          ) : (
            <>
              {renderTime(dateUpdated)} ago in {category}
            </>
          )}
        </p>
      <div className="information-card__section-buttons">
        <ThumbsUp isSelected={selectedVote === "positive"} onClick={() => setSelectedVote('positive')} />
        <ThumbsDown isSelected={selectedVote === "negative"} onClick={() => setSelectedVote('negative')} />
        <Button onClick={onClick}>{voted ? "Vote Again" : "Vote Now"}</Button>
      </div>
				</div>
    </div>
  );
};

export default InformationCard;
