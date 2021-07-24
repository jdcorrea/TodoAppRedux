import React from "react";
import Form from "../../Components/Form";
import ListItems from "../../Components/ListItems";
import "./styles.css";

const AddItems = () => {
  const type = { type: "add" };
  return (
    <div className="add-items-container">
      <Form />
      <div className="add-items-container__list">
        <ListItems {...type} />
      </div>
    </div>
  );
};

export default AddItems;
