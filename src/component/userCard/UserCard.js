import React from "react";
import "./UserCard.css";

const UserCard = props => {
  const userCard = props.usersCard;

  const totalsSalary = userCard.reduce(
    (total, users) => total + Number(users.yearIncome),
    0
  );

  return (
    <div className="user_card">
      <ul>
        <li>
          <strong>User Card Add : </strong> ({props.usersCard.length})
        </li>
        <li>
          <strong>User Total Salary : </strong> ${totalsSalary.toFixed()}
        </li>
      </ul>

      {userCard.map((user, index) => (
        <div className="users_card" key={index}>
          <img src={user.avatar} alt="" />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
