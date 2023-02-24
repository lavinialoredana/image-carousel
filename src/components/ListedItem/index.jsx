import React from "react";

const ListedItem = ({ item,onRemoveItem }) =>{
    return (
      <div className="container">
        <li> {item} </li>
        <button onClick={() => onRemoveItem(item)}> Delete</button>
      </div>
    );
}

export default ListedItem;