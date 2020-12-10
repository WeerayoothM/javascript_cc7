import React, { Children } from "react";

function TabComponent(props) {
  //   console.log(
  //     React.Children.map(Children, (child, idx) => {
  //       return React.cloneElement(child);
  //     })
  //   );
  return (
    <>
      <button
        style={{ width: "100px", height: "50px", fontSize: "2rem" }}
        onClick={() => props.setContent(props.content)}
      >
        {props.tabname}
      </button>
    </>
  );
}

export default TabComponent;
