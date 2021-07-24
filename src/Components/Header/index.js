import { useState } from "react";
import { withRouter } from "react-router-dom";
import HeaderOption from "../HeaderOption";
import headerOptions from "./headerOptions.json";
import "./styles.css";

const Header = (props) => {
  const [activeOption, setActiveOption] = useState("home");

  const onClick = (activeOptionUser, pathOption) => {
    setActiveOption(activeOptionUser);
    props.history.push(pathOption);
  };

  return (
    <header className="header">
      <h1 className="header__title">to do list</h1>
      <nav className="header__nav nav">
        <ul className="nav__list list">
          {headerOptions.map((hOpt, index) => {
            return (
              <HeaderOption
                activeOption={activeOption}
                onClick={onClick}
                optionText={hOpt.optionText}
                option={hOpt.option}
                path={hOpt.path}
                key={index}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
