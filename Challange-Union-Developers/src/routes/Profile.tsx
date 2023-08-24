import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Info from '../components/Profile/Info';
import Location from '../components/Profile/Location';
import Login from '../components/Profile/Login';
import { fetchUsers } from '../services/api';

const Profile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState(null);
  const [currentSection, setCurrentSection] = useState('info'); // Estado para controlar a seção atual

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await fetchUsers({ resultsPerPage: 100 }); // Fetch all users
        const foundUser = users.find((user) => user.login.uuid === userId);

        if (foundUser) {
          setUserProfile(foundUser);
        } else {
          navigate('/user-not-found');
        }
      } catch (error) {
        console.error(error);
        navigate('/user-not-found');
      }
    }

    fetchData();
  }, [userId, navigate]);

  const handleSectionChange = (section) => {
    setCurrentSection(section); // Atualiza o estado para a seção clicada
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profile-page'>
      <div className='back-button'>
        <button onClick={handleBack}>Back</button>
      </div>
      <h2>Profile</h2>
      <div className='user-info'>
        <img
          src={userProfile.picture.large}
          alt={`${userProfile.name.title} ${userProfile.name.first} ${userProfile.name.last}`}
        />
        <p>{`${userProfile.name.title} ${userProfile.name.first} ${userProfile.name.last}`}</p>
      </div>
      <div>
        <button onClick={() => handleSectionChange('info')}>Info</button>
        <button onClick={() => handleSectionChange('location')}>Location</button>
        <button onClick={() => handleSectionChange('login')}>Login</button>
      </div>
      {/* Renderiza a seção atual com base no estado currentSection */}
      {currentSection === 'info' && <Info user={userProfile} />}
      {currentSection === 'location' && <Location user={userProfile} />}
      {currentSection === 'login' && <Login user={userProfile} />}
    </div>
  );
};

export default Profile;
