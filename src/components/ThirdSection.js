import React from "react";
import SecondBox from "./ThirdSection2";
import "../Styles/ThirdSection.css";
import BarChart from "./Barchart";
const ThirdSection = () => {
    return (
      <div className="third-section">
        <div className="box1">
          <BarChart />
        </div>
          <div className="box2-container">
        <SecondBox />
      </div>
        {/* Add another box or content for the second box in the third section */}
      </div>
    );
  };
  
  export default ThirdSection;