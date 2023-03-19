import React from "react";
import { useState, useEffect } from "react";

import Star from "../../components/Star";
import Congratulations from "../../components/Congratulations";

const HooksExercises = () => {
    const createArray = (length) => [...Array(length)];

    // if no different value is specified for totalStars in the < StarRating /> component ex: < StarRating totalStars = {10} />
    // the default value of the param will be 5
    const StarRating = ({ totalStars = 5 }) => {
        const [selectedStars, setSelectedStars] = useState(0);
        return (
            <div>
                {createArray(totalStars).map((element, index) => (
                    <Star
                        key={index}
                        selected={selectedStars > index}
                        onSelect={() => setSelectedStars(index + 1)}
                    />
                ))}

                <p>
                    You selected {selectedStars} out of {totalStars}
                </p>
            </div>
        );
    };

    const [winner, setWinner] = useState("John");
    const [admin, setAdmin] = useState("false");

     useEffect(()=> {
        console.log(`The winner is" ${winner}`);
    }, [winner])

    const handleWinner = () => {
        setWinner("Will");
    };

    useEffect(()=> {
    console.log(`The user is: ${ admin ? "admin" : "not admin"}`);
   }, [admin])

    const handleLogIn = () => {
        setAdmin(!admin)
    };

    return (
        <div>
            <StarRating />
            <Congratulations
                winner={winner}
                handleClick={handleWinner}
                admin = {admin}
                handleLogInClick={handleLogIn}
                

            />
        </div>
    );
};
export default HooksExercises;
