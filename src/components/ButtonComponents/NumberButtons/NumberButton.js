import React from "react";

const NumberButton = (props) => {
  const classes = `number-button ${props.name}`
  return (
    <div className={classes}>
      {props.symbol}
    </div>
  );
};

export default NumberButton