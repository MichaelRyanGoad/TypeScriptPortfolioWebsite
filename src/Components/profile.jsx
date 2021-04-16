import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <div className="App-header">
      <img src={picture} alt="Profile" />
      <h2>{name}</h2>
      <p>{email}</p>
      <pre style={{ color: "white" }}>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
