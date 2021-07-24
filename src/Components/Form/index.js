import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AddTodo from "../../redux/actions/Todos";

const Form = () => {
  const [userItem, setUserItem] = useState("");
  const dispatch = useDispatch();

  const newUserItem = (event) => {
    setUserItem(event.target.value);
  };

  const addItem = () => {
    const id = new Date().getTime();
    dispatch(AddTodo(id, userItem));
    setUserItem("");
  };
  return (
    <div className="add-items-container__input input">
      <input
        className="input__text"
        type="text"
        onChange={newUserItem}
        value={userItem}
      ></input>
      <button className="input__buttton" type="button" onClick={addItem}>
        add
      </button>
    </div>
  );
};

export default Form;
