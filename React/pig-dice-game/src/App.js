import React, { Fragment, useReducer } from 'react';
import './App.css';

import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import DiceCard from './components/DiceCard';
import ScoreContext from './context/ScoreContext';
import scoreReducer, { initialState } from './reducers/scoreReducer';

function App() {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  return (
    <Fragment>
      <ScoreContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Header />
        <div className="container">
          <ScoreCard name={1} active={state.currentPlayer === 0} />
          <DiceCard />
          <ScoreCard name={2} active={state.currentPlayer === 1} />
        </div>
      </ScoreContext.Provider>
    </Fragment>
  );
}

export default App;
