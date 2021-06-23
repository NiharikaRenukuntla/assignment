import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
export const userContextData = React.createContext();

export function useDetails() {
  return useContext(userContextData);
}

const UserContext = (props) => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((response) => setUsers(response.data.users));
  }, []);
  return (
    <userContextData.Provider value={[users, setUsers]}>
      {props.children}
    </userContextData.Provider>
  );
};

export default UserContext;
