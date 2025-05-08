import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm(props) {
  const [newItemList,setNewItemLIst ]= useState({
    
    name : '',
    category : 'Produce',
  })

  // track changes on form
 function handleNewItemChange(e){
  
    const {name,value}= e.target 
     setNewItemLIst({
      ...newItemList,
      [name]:value,
     })
 }
// submit form
 function handleSubmit(e){
  e.preventDefault();
    const newItem={
      id : uuid(),
      ...newItemList
    }
    props.onItemFormSubmit(newItem)
    // send new item to parent
 
// when submitted clear everything
  setNewItemLIst({
    name : '',
    category : 'Produce',
  })
  
 }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemList.name}  onChange={handleNewItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItemList.category}  onChange={handleNewItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
