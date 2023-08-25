import '../../styles/styles.scss'; // Importa os estilos SCSS
const Login = ({ user }) => {
  return (
    <div className='info'>
      <div className="info-box"><strong><p>Email</p></strong><span className="info-content">{user.email}</span></div>
      <div className="info-box"><strong><p>Username</p></strong> <span className="info-content">{user.login.username}</span></div>
      <div className="info-box"><strong><p>Password</p></strong><span className="info-content">{user.login.password}</span></div>
    </div>
  );
};

export default Login;