import React from "react";
import HouseIcon from "@material-ui/icons/House";
import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
import HeaderItem from "./HeaderItem";
import MiddleItem from "./MiddleItem";
import FooterItem from "./FooterItem";

const Index = () => {
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
            <HeaderItem text="Search" />
            <HeaderItem text="Search" />
            <HeaderItem text="Search" />
          </div>
        </div>
        <div className="middle">
          <div className="middle__heading">Inboxes</div>
          <div className="middle__menu">
            <MiddleItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="San Francisco"
              no={8845654123}
            />
            <MiddleItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="San Francisco"
              no={8845654123}
            />
          </div>
        </div>
        <div className="footer">
          <div className="middle__heading">Your team</div>
          <div className="middle__menu">
            <FooterItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="San Francisco"
              no={8845654123}
            />
            <FooterItem
              url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
              name="San Francisco"
              no={8845654123}
            />
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
