import React from "react";
import UserAccount from '../components/UserAccount';
import '../Styles/Dashboard.css';
const Dashboard = () => {
    return (
        <div className="dashboard">
          {/* <h2> */}
            {/* <i className="material-icons">category</i> */}
          {/* Dashboard</h2> */}
          <ul className="dashboard-menu">
            <li style={{fontSize:"30px",display:"flex",flexDirection:"row-reverse"}}><i className="material-icons">category</i>Dashboard</li>
          <li>
          <i className="material-icons">trending_up</i> Dashboard <i className="material-icons"></i>
        </li>
        <li>
          <i className="material-icons">category</i> Product <i className="material-icons">keyboard_arrow_right</i>
        </li>
        <li>
          <i className="material-icons">people</i> Customers <i className="material-icons">keyboard_arrow_right</i>
        </li>
        <li>
          <i className="material-icons">attach_money</i> Income <i className="material-icons">keyboard_arrow_right</i>
        </li>
        <li>
          <i className="material-icons">trending_up</i> Promote <i className="material-icons">keyboard_arrow_right</i>
        </li>
        <li>
          <i className="material-icons">help</i> Help <i className="material-icons">keyboard_arrow_right</i>
        </li>
      </ul>
      <UserAccount />
        </div>
      );
    };
    
  
  export default Dashboard;