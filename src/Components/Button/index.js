import "./Button.css";

const buttonStates = {
  add: "btn btn--add",
  delete: "btn btn--delete"
};

const Button = ({ type, onClick }) => {
  return (
    <button
      className={buttonStates[type]}
      type="button"
      onClick={() => onClick()}
    >
      {type}
    </button>
  );
};

export default Button;
