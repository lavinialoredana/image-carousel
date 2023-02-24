import React, { useState } from "react";
import ItemToBuy from "../../components/ItemToBuy";
import ListedItem from "../../components/ListedItem";

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
            <ListedItem
              key={index}
              item={item}
              onRemoveItem={handleRemoveItem}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default ShoppingList;
