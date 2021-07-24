import React from "react";
import ListItems from "../../Components/ListItems";
import "./styles.css";

const RemoveItems = () => {
  const type = { type: "delete" };
  return (
    <div className="delete-items-container">
      <div className="delete-items-container__list">
        <ListItems {...type} />
      </div>
    </div>
  );
};

export default RemoveItems;
