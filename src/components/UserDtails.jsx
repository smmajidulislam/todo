import { useUsers } from "../contexts/userContext";

const UserDetails = () => {
  const { users, userId } = useUsers();

  const selectedUser = users.find((user) => user.id === userId);

  return (
    <div>
      {selectedUser ? (
        <div>
          <h2>User Details</h2>
          <p>
            <strong>Name:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Username:</strong> {selectedUser.username}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>City:</strong> {selectedUser.address?.city}
          </p>
          <p>
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
          <p>
            <strong>Website:</strong> {selectedUser.website}
          </p>
        </div>
      ) : (
        <p>User does not exist</p>
      )}
    </div>
  );
};

export default UserDetails;
