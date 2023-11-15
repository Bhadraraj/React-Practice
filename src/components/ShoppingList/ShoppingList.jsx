import React, { useState, useCallback } from 'react';
import './shoppingList.css';

const validateFields = (newItemName) => {
  const errors = {};

  if (!newItemName) {
    errors['newItemName'] = 'Please enter grocery item name';
  }

  return errors;
};

const ShoppingList = () => {
  const [state, setState] = useState({
    newItemName: '',
    groceryItems: [
      { name: 'Bananas', id: 'item-1', completed: false },
      { name: 'Apples', id: 'item-2', completed: true },
      { name: 'Rice', id: 'item-3', completed: false },
    ],
    validationErrors: {},
    submitted: 0,
  });

  const handleOnChange = useCallback((e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCompletedToggle = useCallback(
    (e) => {
      const { checked } = e.target;
      const itemIndex = parseInt(e.target.attributes.itemindex.value, 10);

      setState((prev) => {
        const newGroceryItemsState = [...prev.groceryItems];
        newGroceryItemsState[itemIndex].completed = checked;

        return {
          ...prev,
          groceryItems: newGroceryItemsState,
        };
      });
    },
    []
  );

  const handleDelete = useCallback(
    (e) => {
      const itemIndex = parseInt(e.target.attributes.itemindex.value, 10);

      setState((prev) => {
        const newGroceryItemsState = [...prev.groceryItems];
        newGroceryItemsState.splice(itemIndex, 1);

        return {
          ...prev,
          groceryItems: newGroceryItemsState,
        };
      });
    },
    []
  );

  const handleOnSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const isFormValid = validateFields(state.newItemName);

      if (Object.keys(isFormValid).length === 0) {
        const newGroceryItemObject = {
          completed: false,
          name: state.newItemName,
        };

        setState((prev) => ({
          ...prev,
          submitted: prev.submitted + 1,
          groceryItems: [...prev.groceryItems, newGroceryItemObject],
          newItemName: '',
        }));
      } else {
        setState((prev) => ({ ...prev, validationErrors: isFormValid }));
      }
    },
    [state]
  );

  const {
    newItemName: newItemNameError,
  } = state.validationErrors;

  const { groceryItems, submitted } = state;

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
              value={state.newItemName}
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

export default ShoppingList;
