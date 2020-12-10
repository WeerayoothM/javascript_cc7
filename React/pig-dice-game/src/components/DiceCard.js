import React, { useContext } from 'react';
import ScoreContext from '../context/ScoreContext'

function DiceCard() {
  const { state, dispatch } = useContext(ScoreContext)

  const roll = () => {
    const newDiceScore = Math.ceil(Math.random() * 6)
    dispatch({ type: "ROLL", payload: { newDiceScore } })
  }
  const keep = () => {
    dispatch({ type: "KEEP" })
  }

  return (
    <div className="card">
      <div className="row">
        <button className="btn btn-danger btn-fw" onClick={roll}>Roll</button>
        <button className="btn btn-success btn-fw" onClick={keep}>Keep</button>
      </div>
      <div className="row">
        <div className="dice-score">{state.diceScore} </div>
      </div>
      <div className="row">
        <p className="round-score">Round Score : {state.roundScore} </p>
      </div>
    </div>
  );
}
export default DiceCard