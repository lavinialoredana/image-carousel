import React, { useEffect, useState } from "react";
import Quote from "../../components/Quote"

function QuoteGenerator() {

    const [quotes, setQuotes] = useState([]);


    const fetchQuotes = async () => {
        const response = await fetch("https://type.fit/api/quotes");

        if(!response.ok) {
            throw new Error("Data failed to be fetched!")
        } else {
            const json = await response.json();
            console.log("quotesJS", json)
            return json;
        }
    }

    useEffect( () => {
        fetchQuotes()
        .then((quotesArray) => {
            setQuotes(quotesArray)
        })
        .catch((e) =>{
            console.log(e.message)
        })
    }, [])

    return (
        <div className="container">
            <h1> Project 3: Quote Generator </h1>
            <Quote />
        </div>
    )
}

export default QuoteGenerator;