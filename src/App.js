import React from "react";
import users from "./data/users.json";
import "./App.css";
const App = () => {
  const renderUser = (user) => {
    return (
      <div key={user.id} className="card">
        <div className="card-header">
          <img src={user.avatar} alt="avatar" />
          <h3
            className={user.gender == "Female" ? "red" : "blue"}
          >{`${user.first_name} ${user.last_name}`}</h3>
        </div>
        <div className="card-body">
          <h4>{user.gender}</h4>
        </div>
      </div>
    );
  };
  const renderUsers = (users = []) => {
    if (users.length === 0) {
      return <div></div>;
    } else {
      return users.map((user) => {
        return renderUser(user);
      });
    }
  };
  return <div className="users-container">{renderUsers(users)}</div>;
};

export default App;
