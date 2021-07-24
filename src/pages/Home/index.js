import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-container__title">Welcome to the TODO LIST APP</h2>
      <p className="home-container__description">
        Add items section allows you to put items in your todo list
      </p>
      <p className="home-container__description">
        List items section list all your items in the app and allows you to
        crossout those one that are completed.
      </p>
      <p className="home-container__description">
        Delete items section allows you delete items from your item list
      </p>
    </div>
  );
};

export default Home;
