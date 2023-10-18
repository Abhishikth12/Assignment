import React from "react";
import GreetingSection from "./GreetingSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
const RightSide = () => {
    return (
      <div className="right-side">
        <GreetingSection />
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </div>
    );
  };
  
  export default RightSide;