import React from "react";
import "../Styles/GreetingSection.css"

const GreetingSection = () => {
  return (
    <div className="greeting-section">
      <div className="greeting">
        <h3>Hi, Good Morning</h3>
      </div>
      <div className="search-box">
        <i className="material-icons">search</i>
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};
export default GreetingSection;