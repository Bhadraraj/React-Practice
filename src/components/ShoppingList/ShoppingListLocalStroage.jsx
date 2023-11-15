import './ShoppingList.css';
import React, { useState, useEffect } from 'react';

const ShoppingListLocalStorage = () => {
  const [newItemName, setNewItemName] = useState('');
  const [groceryItems, setGroceryItems] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [submitted, setSubmitted] = useState(0);

  useEffect(() => {
    const savedStateFromLocalStorage = localStorage.getItem('groceryItems');

    if (savedStateFromLocalStorage) {
      setGroceryItems(JSON.parse(savedStateFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    const updatedStateString = JSON.stringify(groceryItems);
    localStorage.setItem('groceryItems', updatedStateString);
  }, [groceryItems]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewItemName(value);
  };

  const handleCompletedToggle = (e) => {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value;
    const index = parseInt(itemindexValue, 10);

    const newGroceryItemsState = [...groceryItems];
    newGroceryItemsState[index] = {
      ...newGroceryItemsState[index],
      completed: target.checked,
    };

    setGroceryItems(newGroceryItemsState);
  };

  const handleDelete = (e) => {
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value;
    const index = parseInt(itemindexValue, 10);

    const newGroceryItemsState = [...groceryItems];
    newGroceryItemsState.splice(index, 1);

    setGroceryItems(newGroceryItemsState);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateFields();

    if (isFormValid) {
      const newGroceryItemObject = {
        completed: false,
        name: newItemName,
        id: 'item-' + Date.now(),
      };

      setSubmitted((prevSubmitted) => prevSubmitted + 1);
      setGroceryItems((prevGroceryItems) => [...prevGroceryItems, newGroceryItemObject]);
      setNewItemName('');
    }
  };

  const validateFields = () => {
    const errors = {};

    if (!newItemName) {
      errors['newItemName'] = 'Please enter new item name';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const { newItemName: newItemNameError } = validationErrors;

  return (
    <>
      <section>
        <h3>Shopping List</h3>
        {!groceryItems.length && <p>No items!</p>}
        <ul>
          {groceryItems.map((item, index) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={handleCompletedToggle}
                itemindex={index}
              />
              <span>{item.name}</span>
              <button itemindex={index} onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleOnSubmit}>
          <label>
            <span className="error">{newItemNameError}</span>
            <input
              type="text"
              name="newItemName"
              placeholder="Bananas"
              value={newItemName}
              onChange={handleOnChange}
            />
          </label>

          <button type="submit">Submit</button>

          <p>Submitted {submitted} times!</p>
        </form>
      </section>
    </>
  );
};

export default ShoppingListLocalStorage;
