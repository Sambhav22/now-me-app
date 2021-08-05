import React, { useState } from "react";
import PhoneCallbackSharpIcon from "@material-ui/icons/PhoneCallbackSharp";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import Chat from "./Chat";
const Index = () => {
  const [chats] = useState([
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "Lisa",
      time: "9:27 AM",
      desc: "Call Ended",
    },
  ]);

  return (
    <div className="chat__container">
      <div className="chat__header">
        <div className="chat__row1">
          <div className="chat__btn chat__open">Open</div>
          <div className="chat__btn chat__done">Done</div>
          <div className="chat__btn chat__unread">Unread</div>
        </div>
        <div className="chat__row2">
          <div className="chat__icon">
            <PhoneCallbackSharpIcon />
          </div>
          <div className="chat__icon">
            <MessageSharpIcon />
          </div>
        </div>
      </div>
      <div className="chat__body">
        {chats.map((chat) => (
          <Chat chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default Index;
