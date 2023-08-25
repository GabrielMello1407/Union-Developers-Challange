import React from 'react';

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Dob {
  age: number;
}

interface UserInfo {
  name: Name;
  dob: Dob;
}

interface InfoProps {
  user: UserInfo;
}

const Info: React.FC<InfoProps> = ({ user }) => {
  return (
    <div className='info'>
      <div className='info-box'>
        <strong><p>First Name</p></strong> {user.name.first}
      </div>
      <div className='info-box'>
        <strong><p>Last Name</p></strong> <span className="info-content">{user.name.last}</span>
      </div>
      <div className='info-box'>
        <strong><p>Title</p></strong> <span className="info-content">{user.name.title}</span>
      </div>
      <div className='info-box'>
        <strong><p>Age</p></strong> <span className="info-content">{user.dob.age}</span>
      </div>
    </div>
  );
};

export default Info;
