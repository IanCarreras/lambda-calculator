import React from "react";

const SpecialButton = (props) => {
  function handleChange (event) {
    if (props.symbol === 'C') return props.setDisplayResult(0)
  }
  return (
    <div className='special-button' onClick={(event) => handleChange(event)}>{props.symbol}</div>
  );
};

export default SpecialButton