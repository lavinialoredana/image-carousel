import React, { useEffect, useState } from "react";
import Quote from "../../components/Quote";

function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({ author: "", text: "" });

  const fetchQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");

    if (!response.ok) {
      throw new Error("Data failed to be fetched!");
    } else {
      const json = await response.json();
      console.log("quotesJS", json);
      return json;
    }
  };

  useEffect(() => {
    fetchQuotes()
      .then((quotesArray) => {
        setQuotes(quotesArray);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const getRandomQuote = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomItem = array[randomIndex];

    return randomItem;
  };

  const handleNewQuote = () => {
    setRandomQuote(getRandomQuote(quotes));
  };

  return (
    <div className="container">
      <h1> Project 3: Quote Generator </h1>
      <Quote 
        randomQuote={randomQuote} 
        onHandleNewQuote={handleNewQuote} />
    </div>
  );
}

export default QuoteGenerator;
