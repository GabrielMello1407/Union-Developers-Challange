import React from 'react';

interface UserLocation {
  city: string;
  state: string;
  country: string;
}

interface LocationProps {
  user: {
    location: UserLocation;
  };
}

const Location: React.FC<LocationProps> = ({ user }) => {
  return (
    <div className='info'>
      <div className="info-box">
        <strong><p>City</p></strong><span className="info-content">{user.location.city}</span>
      </div>
      <div className="info-box">
        <strong><p>State</p></strong><span className="info-content">{user.location.state}</span>
      </div>
      <div className="info-box">
        <strong><p>Country</p></strong><span className="info-content">{user.location.country}</span>
      </div>
    </div>
  );
};

export default Location;
