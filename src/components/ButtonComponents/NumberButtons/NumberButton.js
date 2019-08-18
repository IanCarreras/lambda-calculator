import React from "react";

const NumberButton = (props) => {
  const classes = `number-button ${props.name}`
  function handleChange() {
    props.setDisplayResult(props.symbol)
  }
  return (
    <div className={classes} onClick={() => handleChange()}>
      {props.symbol}
    </div>
  );
};

export default NumberButton