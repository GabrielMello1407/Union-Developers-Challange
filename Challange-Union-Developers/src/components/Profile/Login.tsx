import React from 'react';

interface UserLogin {
  username: string;
  password: string;
}

interface UserProfile {
  email: string;
  login: UserLogin;
}

interface LoginProps {
  user: UserProfile;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  return (
    <div className='info'>
      <div className="info-box"><strong><p>Email</p></strong><span className="info-content">{user.email}</span></div>
      <div className="info-box"><strong><p>Username</p></strong> <span className="info-content">{user.login.username}</span></div>
      <div className="info-box"><strong><p>Password</p></strong><span className="info-content">{user.login.password}</span></div>
    </div>
  );
};

export default Login;
