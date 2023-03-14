import React from "react";
import { useState } from "react";

import Star from "../../components/Star";

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
            </div>
        );
    };

    return (
        <div>
            <StarRating />
        </div>
    );
};
export default HooksExercises;
