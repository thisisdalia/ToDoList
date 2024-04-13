import React, { useState } from "react";

import classes from './styles/EditItemModal.module.css';

function EditItemModal({ item, onSave, onCancel }) {
    const [editedItem, setEditedItem] = useState(item);

    function saveHandler() {
        onSave(editedItem);
    };

    function cancelHandler() {
        onCancel();
    };

    return (
        <div className={classes['edit-modal']}>
            <div className={classes['edit-modal-card']}>
                <input
                    type="text"
                    value={editedItem}
                    onChange={(e) => setEditedItem(e.target.value)}
                />
                <div>
                    <button onClick={saveHandler} className={classes['edit-save-btn']} disabled={editedItem === ''} >Save</button>
                    <button onClick={cancelHandler} className={classes['edit-cancle-btn']} >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default EditItemModal;