import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import AddItems from "../../pages/AddItems";
import "./AppRouter.css";

const AppRouter = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-items" component={AddItems} />
      </Switch>
    </div>
  );
};

export default AppRouter;
