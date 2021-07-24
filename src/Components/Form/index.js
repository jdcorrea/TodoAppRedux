import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/Todos";
import Button from "../../Components/Button";

const Form = () => {
  const [userItem, setUserItem] = useState("");
  const dispatch = useDispatch();
  const buttonProps = {
    type: "add"
  };

  const newUserItem = (event) => {
    setUserItem(event.target.value);
  };

  const addItem = () => {
    const id = new Date().getTime();
    if (userItem !== "") {
      dispatch(addTodo(id, userItem));
      setUserItem("");
    }
  };
  return (
    <div className="add-items-container__input input">
      <input
        className="input__text"
        type="text"
        onChange={newUserItem}
        value={userItem}
      ></input>
      <Button {...buttonProps} onClick={addItem} />
    </div>
  );
};

export default Form;
