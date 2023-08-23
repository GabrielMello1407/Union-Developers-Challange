import React from 'react';

//resgatando os dados do usuario para a listagem
const UserData = ({ data }) => {
  return (
    <div className='user-list'>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <strong>ID:</strong> {user.login.uuid} <br />
            <strong>First Name:</strong> {user.name.first} <br />
            <strong>Last Name:</strong> {user.name.last} <br />
            <strong>Title:</strong> {user.name.title} <br />
            <strong>Date:</strong> {user.dob.date.substring(0, 10)} <br />
            <strong>Age:</strong> {user.dob.age} <br />
            <button>View Profile</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserData;
