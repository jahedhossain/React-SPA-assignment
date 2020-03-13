import React, { useState, useEffect } from "react";
import "./Users.css";
import User from "./user/User";
import UserCard from "../userCard/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [usersCard, setUsersCard] = useState([]);

  useEffect(() => {
    fetch("http://5e6b742fd708a000160b490e.mockapi.io/api/v1/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  }, [setUsers]);

  const hendleUserCard = user => {
    const newUserCard = [...usersCard, user];
    setUsersCard(newUserCard);
  };

  return (
    <div className="users-section">
      <div className="users">
        <h3>users list</h3>

        {users.length === 0 ? (
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          users.map((user, index) => (
            <User
              users={user}
              hendleUserCard={hendleUserCard}
              key={index}
            ></User>
          ))
        )}
      </div>
      <div className="user_cart">
        <h3>user_cart</h3>
        <UserCard usersCard={usersCard}></UserCard>
      </div>
    </div>
  );
};

export default Users;
