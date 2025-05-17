import { useEffect } from "react";
import { useUsers } from "../contexts/userContext";

const Side = () => {
  const { getAllUsers, users, updateUserId } = useUsers();
  useEffect(() => {
    getAllUsers(10);
  }, []);
  const handleClick = (id) => {
    updateUserId(id);
  };

  return (
    <div>
      {users.map((user) => (
        <p
          key={user.id}
          onClick={() => handleClick(user.id)}
          className="user-name"
        >
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default Side;
