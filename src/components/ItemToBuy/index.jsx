import React from "react";

const ItemToBuy = ({ onSubmit }) => {
  return (
    <div className="container">
      <h3> Items To Buy</h3>
      <form onSubmit={onSubmit}>
        <input name="shoppingItem" type="text" placeholder="Type in your item here" />
        <button>Add Item </button>
      </form>
    </div>
  );
};

export default ItemToBuy;
