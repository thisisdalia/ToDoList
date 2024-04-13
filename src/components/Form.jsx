import React, { useState } from "react";

import classes from "./styles/Form.module.css";

function Form({ addItem }) {
  const [item, setItem] = useState("");

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };

  return (
    <form onSubmit={addHandler} className={classes.form}>
      <input type="text" onChange={changeHandler} value={item} />
      <button type="submit" disabled={!item}>
        ADD
      </button>
    </form>
  );
}

export default Form;
