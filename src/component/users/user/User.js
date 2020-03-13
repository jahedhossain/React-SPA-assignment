import React from "react";
import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const User = props => {
  const { avatar, name, email, phoneNumber, yearIncome, age } = props.users;
  return (
    <div className="single_user">
      <img src={avatar} alt="" />
      <div className="content">
        <h4>Name: {name}</h4>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>PhoneNumber:</strong> {phoneNumber}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>YearIncome:</strong> ${Number(yearIncome).toFixed()}
        </p>
        <button onClick={() => props.hendleUserCard(props.users)}>
          <FontAwesomeIcon icon={faPlusCircle} />
          Add Me
        </button>
      </div>
    </div>
  );
};

export default User;
