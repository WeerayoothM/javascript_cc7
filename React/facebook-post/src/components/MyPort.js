import React from "react";

function MyPort(props) {
  let st1 = { color: "red", border: "2px solid tomato", width: "80%" };

  const pics = "https://picsum.photos/id/237/200/";
  let imgs = pics + props.size;
  return (
    <div className="MyPort" style={st1}>
      <div>
        <h1>Hello, World</h1>
        <p>{new Date().toDateString()}</p>
        <p>{new Date().toLocaleDateString}</p>
      </div>
      <div>
        <p>{props.Text}</p>
      </div>
      <div>
        <img src={imgs}></img>
      </div>
      <div>
        <button>Look</button>
        <button>Like</button>
        <button>Love</button>
      </div>
    </div>
  );
}

export default MyPort;
