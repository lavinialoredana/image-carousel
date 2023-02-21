import React from "react";

const Quote = ({ randomQuote, onHandleNewQuote }) => {
  return (
    <div>
      <h4>{randomQuote?.text}</h4>
      <p> {randomQuote?.author}</p>
      <button onClick={onHandleNewQuote}> Get new quote</button>
    </div>
  );
};

export default Quote;
