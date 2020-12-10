import React, { useContext } from 'react';
import ScoreContext from '../context/ScoreContext'

function ScoreCard({ name, active }) { // destructuring ตั้งแต่ตอนรับเข้าได้เลย
  const { state } = useContext(ScoreContext);
  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <h1 className="player-name">PLAYER {name}</h1>
      <p className="player-score">{state.playerScore[name - 1]}</p>
    </div>
  );
}

export default ScoreCard;
