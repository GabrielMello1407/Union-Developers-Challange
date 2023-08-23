import React, { useState } from 'react';
import Pages from '../components/Pages';
import UserData from '../components/UserData';

const Home = () => {
  const [userData, setUserData] = useState([]);

  const handleUserDataUpdate = (data) => {
    setUserData(data);
  };

  return (
    <div className='home'>
      <Pages onDataUpdate={handleUserDataUpdate} />
      <UserData data={userData} />
    </div>
  );
};

export default Home;
