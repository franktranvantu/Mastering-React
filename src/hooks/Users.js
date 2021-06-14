import React, {useEffect, useState} from 'react';
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const {data: users} = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(users);
    }
    getUsers();
  });
  return (
    <ul>
      {
        users.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  );
}

export default Users;