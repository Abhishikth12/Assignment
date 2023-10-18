import React from "react";
import image1 from "../images/logo1.png"
import image2 from "../images/logo2.png"
import image3 from "../images/logo3.png"
import image4 from "../images/logo4.png"
import "../Styles/SecondSection.css";
const SecondSection = () => {
    return (
      <div className="second-section">
        <div className="box">
        <img src={image1} alt="Logo" className="logo-image" />
          <div className="text">
            <span className="small-text"> Earnings</span>
            <span className="number">$209.9K</span>
            <div className="arrow-container">
                 <i className="material-icons arrow-up">arrow_upward</i>
                 <span className="large-text green-text">37% this month</span>
            </div>
          </div>
        </div>
        <div className="box">
        <img src={image2} alt="Logo" className="logo-image" />
          <div className="text">
            <span className="small-text">Orders</span>
            <span className="number">$197.5K</span>
            <div className="arrow-container">
                 <i className="material-icons arrow-down">arrow_downward</i>
                 <span className="large-text red-text">2% this month</span>
            </div>
          </div>
        </div>
        <div className="box">
        <img src={image3} alt="Logo" className="logo-image" />
          <div className="text">
            <span className="small-text">Balance</span>
            <span className="number">$14.5K</span>
            <div className="arrow-container">
                 <i className="material-icons arrow-down">arrow_downward</i>
                 <span className="large-text red-text">11% this month</span>
            </div>
          </div>
        </div>
        <div className="box">
        <img src={image4} alt="Logo" className="logo-image" />
          <div className="text">
            <span className="small-text">Total sales </span>
            <span className="number">$7.8K</span>
            <div className="arrow-container">
                 <i className="material-icons arrow-up">arrow_upward</i>
                 <span className="large-text green-text">17% this week</span>
            </div>
          </div>
        </div>
        {/* Repeat this structure for the remaining three boxes */}
      </div>
    );
  };
  
  export default SecondSection;