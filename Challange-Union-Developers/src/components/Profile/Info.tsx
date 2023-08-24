const Info = ({ user }) => {
  return (
    <div>
      <h2>Info</h2>
      <strong>First Name:</strong> {user.name.first} <br />
      <strong>Last Name:</strong> {user.name.last} <br />
      <strong>Title:</strong> {user.name.title} <br />
      <strong>Gender:</strong> {user.gender} <br />
      <strong>Age:</strong> {user.dob.age} <br />
    </div>
  );
};

export default Info;
