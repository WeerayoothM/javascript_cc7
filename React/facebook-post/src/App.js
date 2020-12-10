import React from "react";
import "./App.css";
import MyPost from "./components/MyPost";
import Myport from "./components/MyPort";

function App() {
  return (
    <div className="App">
      <MyPost
        name="eiei"
        text="loreamdkl;jadlhafof"
        width="1080"
        height="500"
      ></MyPost>
      <Myport size="300"></Myport>
    </div>
  );
}

export default App;
