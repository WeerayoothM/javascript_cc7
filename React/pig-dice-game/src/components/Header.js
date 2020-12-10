import React, { useContext } from 'react';
import ScoreContext from '../context/ScoreContext';


function Header() {
  const { state, dispatch } = useContext(ScoreContext);
  return (
    <div className="header">
      <button className="btn" onClick={() => dispatch({ type: "RESET" })}>New Game</button>
    </div>
  );
}

export default Header;