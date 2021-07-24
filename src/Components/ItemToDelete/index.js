import { Fragment } from "react";
import Button from "../Button";
import { deleteTodo } from "../../redux/actions/Todos";
import { useDispatch } from "react-redux";
import "./ItemToDelete.css";

const Item = ({ id, text, completed }) => {
  const todoItemCompletedCss = {
    false: "list-todo__item",
    true: "list-todo__item list-todo__item--completed"
  };

  const buttonProps = {
    type: "delete"
  };

  const dispatch = useDispatch();
  const onClick = (id) => dispatch(deleteTodo(id));
  return (
    <Fragment>
      <li className={todoItemCompletedCss[completed]}>
        <Button {...buttonProps} onClick={() => onClick(id)} />
        {text}
      </li>
    </Fragment>
  );
};

export default Item;
