import React, { useState } from "react";
import HouseIcon from "@material-ui/icons/House";
import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import HeaderItem from "./HeaderItem";
import MiddleItem from "./MiddleItem";
import FooterItem from "./FooterItem";

const Index = () => {
  const [headerItems] = useState([
    { text: "Search" },
    { text: "Contacts" },
    { text: "Analytics" },
  ]);

  const [middleItems] = useState([
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "San Francisco",
      no: "8845654123",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "San Francisco",
      no: "8845654123",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "San Francisco",
      no: "8845654123",
    },
    {
      url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      name: "San Francisco",
      no: "8845654123",
    },
  ]);

  return (
    <div className="container">
      <div>
        <div className="header">
          <div className="user-info">
            <img
              className="user-info__image"
              src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              alt="new"
            />
            <div className="user-info__text">Amy Smith</div>
            <HouseIcon className="user-info__icon" />
          </div>
          <div className="menu">
            {headerItems.map((item) => (
              <HeaderItem text={item.text} />
            ))}
          </div>
        </div>
        <div className="middle">
          <div className="middle__heading">Inboxes</div>
          <div className="middle__menu">
            {middleItems.map((item) => (
              <MiddleItem url={item.url} name={item.name} no={item.no} />
            ))}
          </div>
        </div>
        <div className="footer">
          <div className="middle__heading">Your team</div>
          <div className="middle__menu">
            <FooterItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="Robert"
              no={8845654123}
            />
            <FooterItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="Kimberly"
              no={8845654123}
            />
            <div className="invite">
              <AddSharpIcon className="invite__icon" />
              <div className="invite__text">Invite your team</div>
            </div>
          </div>
        </div>
      </div>
      <div className="submit">
        <FeedbackSharpIcon className="submit__icon" />
        <div className="submit__text">Submit Feedback</div>
      </div>
    </div>
  );
};

export default Index;
