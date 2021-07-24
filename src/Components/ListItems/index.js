import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import Item from "../Item";
import "./ListItems.css";

const ListItems = () => {
  const itemsList = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const onClick = (id) => dispatch(toggleTodo(id));

  return (
    <ul className="item-list-nav">
      {itemsList.map((todo) => (
        <Item key={todo.id} {...todo} />
        // <Item key={todo.id} {...todo} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ListItems;
