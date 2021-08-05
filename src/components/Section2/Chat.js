import React from "react";

const Chat = ({ chat }) => {
  return (
    <div className="chat__item">
      <img className="chat__image" src={chat.url} alt="new" />
      <div className="chat__text">
        {chat.name}
        <div className="chat__tbody">{chat.desc}</div>
      </div>
      <div className="chat__date">{chat.time}</div>
    </div>
  );
};

export default Chat;
