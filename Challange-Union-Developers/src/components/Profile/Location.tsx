const Location = ({ user }) => {
  return (
    <div>
      <h2>Location</h2>
      <strong>City:</strong> {user.location.city} <br />
      <strong>State:</strong> {user.location.state} <br />
      <strong>Country:</strong> {user.location.country} <br />
    </div>
  );
};

export default Location;