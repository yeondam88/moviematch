import React from "react";

const Spinner = props => {
  return (
    <div
      style={{
        width: "100px",
        margin: "0 auto",
        textAlign: "center",
        ...props.styles
      }}
    >
      <div className="spinner spinner-bounce-bottom" />
    </div>
  );
};

export default Spinner;
