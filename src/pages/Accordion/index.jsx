import React from "react";
import Details from "../../components/Details";
import { detailsArray } from "../../utils/detailsArray";

function Accordion() {
  return (
    <div className="container">
      <h1> FAQ/Accordion</h1>

      {detailsArray.map((detail) => {
        console.log("Details", detail);
        return (
          <div key={detail.key}>
            <Details title={detail.title} bodyMessage={detail.message} />
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
