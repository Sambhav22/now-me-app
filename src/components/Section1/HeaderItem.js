import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const HeaderItem = ({ text }) => {
  return (
    <div className="menu__item">
      <SearchIcon className="user-info__icon" />
      <div className="menu__text">{text}</div>
    </div>
  );
};

export default HeaderItem;
