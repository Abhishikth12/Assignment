import React from "react";
import '../Styles/UserAccount.css';
const UserAccount = () => {
    return (
      <div className="user-account">
        <img src="/path/to/user-logo.png" alt="User Logo" className="user-logo" />
        <div className="user-details">
          <p className="user-name">John Doe</p>
          {/* <p className="user-position">Developer</p> */}
        </div>
        <i className="material-icons">keyboard_arrow_right</i>
      </div>
    );
  };

export default UserAccount;