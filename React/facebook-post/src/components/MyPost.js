import React, { Component } from "react";

class MyPost extends Component {
  render() {
    const currentDate = new Date();
    // post-container style
    const postContainer = {
      width: "40%",
      margin: "5px auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "1px solid black",
    };
    // post-content style
    const postContent = {
      margin: "5px 5px",
    };
    const imgStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingBottom: "1px",
    };
    const postButton = {
      marginLeft: "5px",
    };
    const loremPicsum = "https://picsum.photos/";
    let imgSrc = loremPicsum + this.props.width + "/" + this.props.height;

    return (
      <div className="post-container" style={postContainer}>
        <div className="post-content" style={postContent}>
          <h3 style={{ margin: "0px" }}>{this.props.name}</h3>
          <h6>
            {currentDate.toDateString() +
              ", " +
              currentDate.toLocaleTimeString()}
          </h6>
          <hr />
          <div className="post-content">
            <p>{this.props.text}</p>
            <div style={imgStyle}>
              <img src={imgSrc} style={imgStyle}></img>
            </div>
          </div>
          <hr />
          <div className="post-button">
            <button style={postButton}>Like</button>
            <button style={postButton}>Comment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPost;
