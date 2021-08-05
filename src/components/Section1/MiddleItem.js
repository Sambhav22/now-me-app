import React from "react";

const MiddleItem = ({ url, name, no }) => {
  return (
    <div className="middle__item">
      <img className="middle__image" src={url} alt="new" />
      <div className="middle__text">
        <div className="middle__text1">{name}</div>
        <div className="middle__text2">{no}</div>
      </div>
    </div>
  );
};

export default MiddleItem;
