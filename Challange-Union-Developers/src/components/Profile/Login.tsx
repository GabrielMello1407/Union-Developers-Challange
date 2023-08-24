const Login = ({ user }) => {
  return (
    <div>
      <h2>Login</h2>
      <strong>Email:</strong> {user.email} <br />
      <strong>Username:</strong> {user.login.username} <br />
      <strong>Password:</strong> {user.login.password} <br />
    </div>
  );
};

export default Login;