import React from "react";
import ListItems from "../../Components/ListItems";
import "./styles.css";

const AddItems = () => {
  const type = { type: "list" };
  return (
    <div className="list-items-container">
      <div className="list-items-container__list">
        <ListItems {...type} />
      </div>
    </div>
  );
};

export default AddItems;
