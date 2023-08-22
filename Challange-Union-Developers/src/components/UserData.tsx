import React from 'react';

const UserData = ({ data }) => {
  return (
    <div className='user-list'>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <strong>ID:</strong> {user.login.uuid} <br />
            <strong>Name:</strong> {user.name.first} {user.name.last} <br />
            <strong>Title:</strong> {user.name.title} <br />
            <strong>Date of Birth:</strong> {user.dob.date.substring(0, 10)} <br />
            <strong>Age:</strong> {user.dob.age} <br />
            <button>View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
