import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../redux/actions/Todos";
import Item from "../Item";
import ItemToDelete from "../ItemToDelete";
import "./ListItems.css";

const ListItems = ({ type }) => {
  const itemsList = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClick = (id) => dispatch(toggleTodo(id));

  return (
    <ol className="item-list list-todo">
      {itemsList.map((todo) => {
        if (type === "add") {
          return <Item key={todo.id} {...todo} onClick={onClick} />;
        }
        if (type === "list") {
          return <Item key={todo.id} {...todo} onClick={onClick} />;
        }
        if (type === "delete") {
          return <ItemToDelete key={todo.id} {...todo} onClick={onClick} />;
        }
        return false;
      })}
    </ol>
  );
};

export default ListItems;
