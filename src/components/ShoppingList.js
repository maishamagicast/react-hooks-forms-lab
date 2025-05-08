import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState(items);
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemSubmit(newItem) {
    setItemList((prevItems) => [...prevItems, newItem]);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = itemList.filter((item) => {
    const selectedCategoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase());
    return selectedCategoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemSubmit} />
      <Filter
        search={search}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
