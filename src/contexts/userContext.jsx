import { createContext, useContext, useState } from "react";
import { getUsers } from "../api/userApi";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState({
    users: [],
    loading: false,
    error: null,
    userId: 0,
  });

  const getAllUsers = async (limit) => {
    setData((prev) => ({ ...prev, loading: true }));
    try {
      const users = await getUsers(limit);
      setData((prev) => ({ ...prev, users, loading: false }));
    } catch (error) {
      setData((prev) => ({ ...prev, error, loading: false }));
    }
  };
  const updateUserId = (id) => {
    setData((prev) => ({ ...prev, userId: id }));
  };

  return (
    <UserContext.Provider
      value={{
        users: data.users,
        loading: data.loading,
        userId: data.userId,
        getAllUsers,
        updateUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUsers must be used within UserProvider");
  return context;
};
