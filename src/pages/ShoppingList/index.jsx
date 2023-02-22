import React, { useState } from "react";
import ItemToBuy from "../../components/ItemToBuy";

function ShoppingList() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.shoppingItem.value;
    setItems((previousValue) => [...previousValue, value]);
  };

  return (
    <div>
      <h1> Project 4: Shopping List</h1>
      <ItemToBuy onSubmit={handleSubmit} />
      <div>
        <ol>
            {items.map((item) => {
                return(
                    <li> {item}</li>
                )
            })}
        </ol>
      </div>
    </div>
  );
}

export default ShoppingList;
