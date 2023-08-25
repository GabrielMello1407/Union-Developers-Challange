import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Info from '../components/Profile/Info';
import Location from '../components/Profile/Location';
import Login from '../components/Profile/Login';
import { fetchUsers } from '../services/api';
import '../styles/styles.scss';

interface UserLocation {
  city: string;
  state: string;
  country: string;
}

interface UserLogin {
  username: string;
  password: string;
}

interface UserProfile {
  email: string;
  login: UserLogin;
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: UserLocation;
}

const Profile: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [currentSection, setCurrentSection] = useState<string>('info');

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await fetchUsers({ resultsPerPage: 100 });
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

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profile-page'>
      <div className="full-width-container">
        <div className='back-button'>
          <button onClick={handleBack}>Back</button>
        </div>
        <div className='user-info'>
          <img
            src={userProfile.picture.large}
            alt={`${userProfile.name.title} ${userProfile.name.first} ${userProfile.name.last}`}
          />
          <h2>{`${userProfile.name.first} ${userProfile.name.last}`}</h2>
          <p>{userProfile.name.title}</p>
        </div>
      </div>
      <div className='button-section'>
        <button
          onClick={() => handleSectionChange('info')}
          className={currentSection === 'info' ? 'active' : ''}
        >
          Info
        </button>
        <button
          onClick={() => handleSectionChange('location')}
          className={currentSection === 'location' ? 'active' : ''}
        >
          Location
        </button>
        <button
          onClick={() => handleSectionChange('login')}
          className={currentSection === 'login' ? 'active' : ''}
        >
          Login
        </button>
      </div>
      <div className='info-section'>
        {currentSection === 'info' && <Info user={userProfile} />}
        {currentSection === 'location' && <Location user={userProfile} />}
        {currentSection === 'login' && <Login user={userProfile} />}
      </div>
    </div>
  );
};

export default Profile;
