import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../redux/actions/Todos";
import Item from "../Item";
import "./ListItems.css";

const ListItems = () => {
  const itemsList = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClick = (id) => dispatch(toggleTodo(id));

  return (
    <ol className="item-list list-todo">
      {itemsList.map((todo) => (
        <Item key={todo.id} {...todo} onClick={onClick} />
      ))}
    </ol>
  );
};

export default ListItems;
