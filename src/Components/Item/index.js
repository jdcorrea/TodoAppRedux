import "./Item.css";

const todoItemCompletedCss = {
  false: "list-todo__item",
  true: "list-todo__item list-todo__item--completed"
};

const Item = ({ id, text, completed, onClick }) => {
  return (
    <li onClick={() => onClick(id)} className={todoItemCompletedCss[completed]}>
      {text}
    </li>
  );
};

export default Item;
