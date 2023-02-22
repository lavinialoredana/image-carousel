import React from "react";
import Details from "../../components/Details";
import { detailsArray } from "../../utils/detailsArray";

function Accordion() {
  return (
    <div className="container">
      <h1> FAQ/Accordion</h1>

      {detailsArray.map((detail) => {
        return (
          <div key={detail.id}>
            <Details title={detail.title} bodyMessage={detail.message} />
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
