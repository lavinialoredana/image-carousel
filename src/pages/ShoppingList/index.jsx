import React, { useState } from "react";
import ItemToBuy from "../../components/ItemToBuy";

function ShoppingList() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.shoppingItem.value;
    setItems((previousValue) => [...previousValue, value]);
  };

  const handleRemoveItem = (itemToRemove) => {
    const remainingItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(remainingItems);
  };

  return (
    <div>
      <h1> Project 4: Shopping List</h1>
      <ItemToBuy onSubmit={handleSubmit} />
      <ol>
        {items.map((item, index) => {
          return (
            <div key = {index}>
              <li> {item} </li>
              <button onClick={()=> handleRemoveItem(item)}> Delete</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default ShoppingList;
