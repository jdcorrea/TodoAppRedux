import "./Item.css";

const todoItemCompletedCss = {
  false: "list__item",
  true: "list__item list__item--completed"
};

const Item = ({ id, text, completed, onClick }) => {
  return (
    // <li onClick={() => onClick(id)} className={todoItemCompletedCss[completed]}>
    //   {text}
    // </li>
    <li className={todoItemCompletedCss[completed]}>{text}</li>
  );
};

export default Item;
