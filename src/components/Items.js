import React, { useState } from "react";
import EditItemModal from "./EditItemModal";

import classes from './styles/Items.module.css';

function Items({ items, onDelete, onUpdate }) {
    const [editItemIndex, setEditItemIndex] = useState(null);

    function deleteHandler(index) {
        onDelete(index);
    };

    function editHandler(index) {
        setEditItemIndex(index);
    };

    function cancelEdit() {
        setEditItemIndex(null);
    };

    function saveEdit(index, newItem) {
        onUpdate(index, newItem);
        setEditItemIndex(null);
    };

    return (
        <div className={classes['items-card']}>
            <ul>
                {items.map((item, index) => (
                    <div key={index} className={classes['items-list']}>
                        <li>{item}</li>
                        <div>
                            <button onClick={() => editHandler(index)} className={classes['items-edit-btn']} >Edit</button>
                            <button onClick={() => deleteHandler(index)} className={classes['items-delete-btn']}>Delete</button>
                        </div>
                    </div>
                ))}
            </ul>
            {editItemIndex !== null && (
                <EditItemModal
                    item={items[editItemIndex]}
                    onSave={(newItem) => saveEdit(editItemIndex, newItem)}
                    onCancel={cancelEdit}
                />
            )}
        </div>
    );
}

export default Items;