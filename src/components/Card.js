import React, { useState } from "react";
import "../styles/components/card.css";
import logo from "../assets/img/bg-people.@2x.png";
import ThumbsUp from "./ThumbsUp";
import InformationCard from "./InformationCard";
import GaugeBar from "./GaugeBar";
import ThumbsDown from "./ThumbsDown";

const Card = ({
  isList,
  image,
  name,
  description,
  dateUpdated,
  category,
  votes,
}) => {
  const [voted, setVoted] = useState(false);
  const [selectedVote, setSelectedVote] = useState(null);
  const [newVotes, setNewVotes] = useState(votes);
  const [higher, setHigher] = useState(null);

  const handleAddVote = () => {
    if (selectedVote) {
      setVoted(true);
      setNewVotes({
        positive:
          selectedVote === "positive"
            ? newVotes.positive + 1
            : newVotes.positive,
        negative:
          selectedVote === "negative"
            ? newVotes.negative + 1
            : newVotes.negative,
      });
    }
  };
	
  return (
    <div className={isList ? "card-list" : "card"}>
      <div className={isList ? "card-list__gradient" : "card__gradient"}></div>
      <section className={isList ? "card-list__container" : "card__container"}>
        <div
          className={
            isList ? "card-list__info-character" : "card__info-character"
          }
        >
          {higher === "positive" ? <ThumbsUp /> : <ThumbsDown />}
          <InformationCard
            isList={isList}
            name={name}
            description={description}
            category={category}
            dateUpdated={dateUpdated}
            voted={voted}
            setVoted={setVoted}
            selectedVote={selectedVote}
            setSelectedVote={setSelectedVote}
            onClick={handleAddVote}
						
          />
        </div>
        <div className="card__gauge-bar">
          <GaugeBar positive={newVotes.positive} negative={newVotes.negative} setHigher={setHigher} />
        </div>
      </section>
      <div
        className={
          isList ? "card-list__container-picture" : "card__container-picture"
        }
      >
        <img
          className={isList ? "card-list__picture" : "card__picture"}
          src={require(`../assets/img/${image}`)}
          alt={description}
        />
      </div>
    </div>
  );
};

export default Card;
