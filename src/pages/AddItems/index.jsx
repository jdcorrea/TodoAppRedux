import React from "react";
import Form from "../../Components/Form";
import ListItems from "../../Components/ListItems";
import "./styles.css";

const AddItems = () => {
  return (
    <div className="add-items-container">
      <Form />
      <div className="add-items-container__list">
        <ListItems />
      </div>
    </div>
  );
};

export default AddItems;
