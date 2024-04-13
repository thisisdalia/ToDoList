import React, { useState, useEffect } from "react";
import Form from "./Form";
import Items from "./Items";

import classes from './styles/TodoList.module.css';

function TodoList() {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('todoListItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('todoListItems', JSON.stringify(items));
    }, [items]);

    function addItemToList(newItem) {
        setItems([...items, newItem]);
    }

    function deleteItem(indexToDelete) {
        const updatedItems = items.filter((item, index) => index !== indexToDelete);
        setItems(updatedItems);
    };


    function updateItem(index, newItem) {
        const updatedItems = [...items];
        updatedItems[index] = newItem;
        setItems(updatedItems);
    };

    return (
        <div className={classes['todo-list']}>
            <h1>TODO LIST</h1>
            <Form addItem={addItemToList} />
            <Items items={items} onDelete={deleteItem} onUpdate={updateItem} />
        </div>
    );
}

export default TodoList;