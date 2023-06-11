import React from "react";
import HighScoresData from "./HighScoresData";
import scores from "./data/scores.json";

function HighScores() {
  return <div className="outerTable">{<h1>High Scores per Country</h1>}
  <HighScoresData products={scores} /></div>;
}
export default HighScores;