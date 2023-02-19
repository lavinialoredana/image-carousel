import React from "react";


const Details = ({title, bodyMessage}) => {
    return(

        <div>
       <details>
         <summary>{title}</summary>
         <p>
           {bodyMessage}
         </p>
       </details>
     </div>
)
}

export default Details;